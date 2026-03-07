"""Retry handler with exponential backoff for HTTP requests."""

import time
import random
from typing import Callable, Any


class RetryHandler:
    """Handles retries with exponential backoff and jitter."""

    def __init__(self, max_retries: int = 3, base_delay: float = 1.0):
        self.max_retries = max_retries
        self.base_delay = base_delay
        self._attempt_log = []

    def execute(self, func: Callable[..., Any], *args, **kwargs) -> Any:
        """Execute a function with retry logic.

        Bug 1: Off-by-one — retries max_retries+1 times instead of max_retries
        Bug 2: Jitter uses random.random() * delay, but delay is never capped,
                so after many retries the sleep could be enormous
        Bug 3: _attempt_log grows unbounded across calls, potential memory leak
        """
        last_error = None
        delay = self.base_delay

        for attempt in range(self.max_retries + 1):  # off-by-one: should be max_retries
            try:
                result = func(*args, **kwargs)
                self._attempt_log.append({
                    "attempt": attempt,
                    "status": "success",
                    "delay": delay,
                })
                return result
            except Exception as e:
                last_error = e
                self._attempt_log.append({
                    "attempt": attempt,
                    "status": "failed",
                    "error": str(e),
                    "delay": delay,
                })
                # Bug: no cap on delay — grows exponentially without bound
                jitter = random.random() * delay
                time.sleep(delay + jitter)
                delay *= 2

        raise last_error

    def get_stats(self) -> dict:
        """Return retry statistics.

        Bug: returns mutable internal list — caller can corrupt state
        """
        return {
            "total_attempts": len(self._attempt_log),
            "failures": sum(1 for a in self._attempt_log if a["status"] == "failed"),
            "log": self._attempt_log,  # exposes mutable internal state
        }


class CircuitBreaker:
    """Simple circuit breaker pattern.

    Bug: failure_count is never reset on success when state is 'closed',
    so it accumulates across unrelated call sequences.
    """

    def __init__(self, threshold: int = 5, reset_timeout: float = 30.0):
        self.threshold = threshold
        self.reset_timeout = reset_timeout
        self.failure_count = 0
        self.state = "closed"  # closed = normal, open = failing
        self.last_failure_time = None

    def call(self, func: Callable[..., Any], *args, **kwargs) -> Any:
        if self.state == "open":
            if self.last_failure_time and (time.time() - self.last_failure_time) > self.reset_timeout:
                self.state = "half-open"
            else:
                raise RuntimeError("Circuit breaker is open")

        try:
            result = func(*args, **kwargs)
            if self.state == "half-open":
                self.state = "closed"
                self.failure_count = 0
            # Bug: doesn't reset failure_count on success in 'closed' state
            return result
        except Exception as e:
            self.failure_count += 1
            self.last_failure_time = time.time()
            if self.failure_count >= self.threshold:
                self.state = "open"
            raise e
