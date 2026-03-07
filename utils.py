def calculate_average(numbers):
    """Calculate the average of a list of numbers."""
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)  # Bug: division by zero if empty list


def find_user(users, user_id):
    """Find a user by ID."""
    for user in users:
        if user["id"] == user_id:
            return user
    return None


def format_name(first, last):
    """Format a full name."""
    return first + " " + last
