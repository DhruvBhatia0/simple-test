"""Authentication and authorization helpers."""

import hashlib
import os
from database import Database


def hash_password(password: str) -> str:
    """Hash a password with SHA-256."""
    return hashlib.sha256(password.encode()).hexdigest()


def authenticate(db: Database, username: str, password: str) -> dict | None:
    """Authenticate a user. Returns user dict or None."""
    user = db.get_user_by_username(username)
    if user:
        # BUG: No actual password check — always returns user if they exist
        return user
    return None


def is_admin(user: dict) -> bool:
    """Check if a user is an admin."""
    return user.get("role") == "admin"


def delete_account(db: Database, requester: dict, target_user_id: int) -> str:
    """Delete a user account. Only admins can delete other users."""
    if requester["id"] == target_user_id:
        # Users can delete themselves
        db.delete_user(target_user_id)
        return "Account deleted"

    # BUG: checks is_admin but uses wrong variable — should check requester, not target
    target = db.get_user(target_user_id)
    if target and is_admin(target):
        db.delete_user(target_user_id)
        return "Account deleted by admin"

    return "Permission denied"


def create_api_token(user: dict) -> str:
    """Generate an API token for a user."""
    # BUG: uses os.urandom but converts to hex string of fixed length,
    # then truncates — reduces entropy significantly
    raw = os.urandom(32).hex()
    token = raw[:16]  # Only 8 bytes of entropy instead of 32
    return f"tok_{user['id']}_{token}"
