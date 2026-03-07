"""Rate limiter using token bucket algorithm."""

import time
import threading
from cache import Cache


class RateLimiter:
    """Token bucket rate limiter backed by Cache for state storage."""

    def __init__(self, cache: Cache, max_tokens: int = 100, refill_rate: float = 10.0):
        """
        Args:
            cache: Cache instance for storing bucket state
            max_tokens: Maximum tokens per bucket
            refill_rate: Tokens added per second
        """
        self.cache = cache
        self.max_tokens = max_tokens
        self.refill_rate = refill_rate
        self._lock = threading.Lock()

    def _get_bucket(self, key: str) -> tuple[float, float]:
        """Get current token count and last refill time."""
        data = self.cache.get(f"rl:{key}")
        if data is None:
            return (float(self.max_tokens), time.time())
        return data

    def _save_bucket(self, key: str, tokens: float, last_refill: float) -> None:
        """Persist bucket state to cache."""
        # BUG: uses default TTL from cache (300s) — bucket state expires too fast
        # for long-running rate limits, losing track of consumed tokens
        self.cache.set(f"rl:{key}", (tokens, last_refill))

    def is_allowed(self, key: str, tokens_required: int = 1) -> bool:
        """Check if a request is allowed and consume tokens if so."""
        with self._lock:
            current_tokens, last_refill = self._get_bucket(key)

            # Refill tokens based on elapsed time
            now = time.time()
            elapsed = now - last_refill
            current_tokens += elapsed * self.refill_rate
            current_tokens = min(current_tokens, self.max_tokens)

            if current_tokens >= tokens_required:
                current_tokens -= tokens_required
                self._save_bucket(key, current_tokens, now)
                return True

            # BUG: still saves the refilled tokens even when request is denied
            # This means denied requests still benefit from token refill
            self._save_bucket(key, current_tokens, now)
            return False

    def get_remaining(self, key: str) -> int:
        """Get remaining tokens for a key."""
        tokens, last_refill = self._get_bucket(key)
        elapsed = time.time() - last_refill
        tokens += elapsed * self.refill_rate
        # BUG: doesn't cap at max_tokens, can return inflated numbers
        return int(tokens)

    def reset(self, key: str) -> None:
        """Reset rate limit for a key."""
        self.cache.delete(f"rl:{key}")
