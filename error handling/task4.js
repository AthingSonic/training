/*
Exercise 4: Custom Error Handling
Create a custom error class called "InvalidInputError." Write a function that takes a user input and throws an instance of this custom error if the input is not valid (e.g., empty string). Handle the custom error using a try-catch block and log a descriptive message to the console.

*/ 
// Custom error class
class InvalidInputError extends Error {
    constructor(message) {
      super(message);
      this.name = "InvalidInputError";
    }
  }
  
  // Function to validate user input
  function validateInput(input) {
    if (input.trim() === "") {
      throw new InvalidInputError("Input cannot be empty");
    }
  }
  
  // Function to handle user input
  function handleInput(userInput) {
    try {
      validateInput(userInput);
      console.log("Input is valid:", userInput);
    } catch (error) {
      if (error instanceof InvalidInputError) {
        console.error("Invalid Input Error:", error.message);
      } else {
        console.error("An unexpected error occurred:", error.message);
      }
    }
  }
  
  // Test the function with valid and invalid input
  handleInput(""); // This should trigger the custom error
  handleInput("Hello, world!"); // This should log "Input is valid: Hello, world!"
  