/*
Exercise 1: Catching an Error
Write a function that takes two numbers as arguments and divides the first number by the second number. Handle any potential errors that may occur (e.g., division by zero) and log an appropriate error message to the console.

*/
console.log(`
Exercise 1: Catching an Error
Write a function that takes two numbers as arguments and divides the first number by the second number. Handle any potential errors that may occur (e.g., division by zero) and log an appropriate error message to the console.
`);

function divideNumbers(num1, num2) {
    try {
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        } else {
            return num1 / num2;
        }
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

// Example usage:
console.log(divideNumbers(10, 2)); // Output: 5
console.log(divideNumbers(10, 0)); // Output: Error: Division by zero is not allowed. null
