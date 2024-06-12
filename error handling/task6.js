/*
Exercise 6: Error Handling in Promises
Create a promise that resolves after a random delay (between 1 and 5 seconds) with a random boolean value. Implement error handling in the promise chain, catching any errors that may occur during promise resolution or rejection. Log appropriate error messages to the console.

*/
// Function to create a promise that resolves after a random delay with a random boolean value
function randomBooleanPromise() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1000ms (1s) and 5000ms (5s)
    const value = Math.random() >= 0.5; // Random boolean value

    setTimeout(() => {
      // Randomly decide to resolve or reject to simulate error handling
      if (Math.random() >= 0.2) {
        // 80% chance to resolve
        resolve(value);
      } else {
        // 20% chance to reject
        reject(new Error("Something went wrong during promise resolution"));
      }
    }, delay);
  });
}

// Using the promise with error handling
randomBooleanPromise()
  .then((result) => {
    console.log("Promise resolved with value:", result);
  })
  .catch((error) => {
    console.error("Promise rejected with error:", error.message);
  });
