def factorial(n: int) -> int:
    """
    Calculate the factorial of a non-negative integer using recursion.

    Args:
        n (int): A non-negative integer.

    Returns:
        int: The factorial of n.

    Raises:
        ValueError: If n is negative.
    """
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers.")
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

if __name__ == "__main__":
    try:
        number = 5
        result = factorial(number)
        print(f"The factorial of {number} is {result}")
    except ValueError as e:
        print(e)
