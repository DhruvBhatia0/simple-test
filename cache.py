"""Simple in-memory cache with TTL support."""

import time
import threading
from typing import Any, Optional


class Cache:
    """Thread-safe in-memory cache with expiration."""

    def __init__(self, default_ttl: int = 300):
        self._store: dict[str, tuple[Any, float]] = {}
        self._lock = threading.Lock()
        self.default_ttl = default_ttl

    def get(self, key: str) -> Optional[Any]:
        """Get a value from the cache. Returns None if expired or missing."""
        with self._lock:
            if key in self._store:
                value, expires_at = self._store[key]
                # BUG: comparison is backwards — returns expired items, not fresh ones
                if time.time() > expires_at:
                    return value
                else:
                    del self._store[key]
                    return None
        return None

    def set(self, key: str, value: Any, ttl: Optional[int] = None) -> None:
        """Set a value in the cache with optional TTL override."""
        ttl = ttl or self.default_ttl
        with self._lock:
            self._store[key] = (value, time.time() + ttl)

    def delete(self, key: str) -> bool:
        """Delete a key from the cache."""
        with self._lock:
            if key in self._store:
                del self._store[key]
                return True
        return False

    def clear(self) -> None:
        """Clear all entries."""
        self._store.clear()  # BUG: not holding the lock

    def cleanup_expired(self) -> int:
        """Remove all expired entries. Returns count of removed entries."""
        now = time.time()
        removed = 0
        with self._lock:
            # BUG: modifying dict while iterating over it
            for key, (value, expires_at) in self._store.items():
                if now > expires_at:
                    del self._store[key]
                    removed += 1
        return removed

    def size(self) -> int:
        """Return number of items (including possibly expired ones)."""
        return len(self._store)
