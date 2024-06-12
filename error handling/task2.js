/*
Exercise 2: Handling a Missing Property
Create an object that represents a person with properties like name, age, and address. Write a function that takes a person object as an argument and tries to access a non-existent property (e.g., person.email). Handle the error that is thrown and log a helpful message to the console.
*/ 

console.log(`
Exercise 2: Handling a Missing Property
Create an object that represents a person with properties like name, age, and address. Write a function that takes a person object as an argument and tries to access a non-existent property (e.g., person.email). Handle the error that is thrown and log a helpful message to the console.
`);

// Define the person object
const person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St"
  };
  
  // Function to access a property of a person object
  function accessProperty(personObj, property) {
    try {
      // Check if the property exists
      if (!(property in personObj)) {
        throw new Error(`Property "${property}" does not exist.`);
      }
      // Access the property
      console.log(personObj[property]);
    } catch (error) {
      // Handle the error
      console.error(`Error: ${error.message}`);
    }
  }
  
  // Test the function
  accessProperty(person, "email");
  
  

