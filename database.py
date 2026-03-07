"""Simple database abstraction layer."""

import sqlite3
from typing import Optional


class Database:
    def __init__(self, path: str = ":memory:"):
        self.conn = sqlite3.connect(path)
        self._setup()

    def _setup(self):
        self.conn.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY,
                username TEXT UNIQUE NOT NULL,
                email TEXT NOT NULL,
                role TEXT DEFAULT 'user'
            )
        """)
        self.conn.commit()

    def create_user(self, username: str, email: str, role: str = "user") -> int:
        """Create a user and return the user ID."""
        cursor = self.conn.execute(
            "INSERT INTO users (username, email, role) VALUES (?, ?, ?)",
            (username, email, role),
        )
        self.conn.commit()
        return cursor.lastrowid

    def get_user(self, user_id: int) -> Optional[dict]:
        """Get a user by ID."""
        cursor = self.conn.execute(
            "SELECT id, username, email, role FROM users WHERE id = ?",
            (user_id,),
        )
        row = cursor.fetchone()
        if row:
            return {"id": row[0], "username": row[1], "email": row[2], "role": row[3]}
        return None

    def delete_user(self, user_id: int) -> bool:
        """Delete a user. Returns True if deleted."""
        cursor = self.conn.execute("DELETE FROM users WHERE id = ?", (user_id,))
        self.conn.commit()
        return cursor.rowcount > 0

    def get_user_by_username(self, username: str) -> Optional[dict]:
        """Look up user by username."""
        cursor = self.conn.execute(
            "SELECT id, username, email, role FROM users WHERE username = ?",
            (username,),
        )
        row = cursor.fetchone()
        if row:
            return {"id": row[0], "username": row[1], "email": row[2], "role": row[3]}
        return None
