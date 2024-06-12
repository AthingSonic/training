/*
Exercise 5: Error Logging
Write a function that performs a series of operations and may throw errors during execution. Implement an error logging mechanism that captures and logs any errors that occur during the function's execution, including the stack trace.
*/
// Import the necessary modules
const fs = require("fs");

// Custom error logging function
function logError(error) {
  const errorMessage = `
    ERROR: ${error.message}
    STACK TRACE: ${error.stack}
    ------------------------
    `;
  console.error(errorMessage); // Log to console

  // Append error to a log file
  fs.appendFile("error.log", errorMessage, (err) => {
    if (err) {
      console.error("Failed to write to log file:", err);
    }
  });
}

// Function performing a series of operations
function performOperations() {
  try {
    console.log("Operation 1: Successful");

    // Simulate an operation that throws an error
    throw new Error("Something went wrong in Operation 2");

    console.log("Operation 3: Successful");

    // Another operation that might fail
    const result = riskyOperation();
    console.log("Operation 4: Result:", result);
  } catch (error) {
    // Log any error that occurs during the operations
    logError(error);
  }
}

// Example of a risky operation
function riskyOperation() {
  // Simulate a potential error
  if (Math.random() < 0.5) {
    throw new Error("Risky operation failed");
  }
  return "Success";
}

// Execute the function
performOperations();
