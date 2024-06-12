/*
Exercise 3: Asynchronous Error Handling
Write a function that makes an asynchronous API call to retrieve some data. Introduce an error condition (e.g., an invalid API endpoint) and handle the error using a try-catch block. Log an error message to the console in case of an error.

*/

async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data'); // Replace with a valid API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch data invalid api');
      }
      const data = await response.json();
      console.log('Data:', data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Call the function
  fetchData();
  