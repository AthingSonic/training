// Define the URL for The Cat API
const url = "https://api.thecatapi.com/v1/breeds";

// Function to fetch data from the API and store cat names in a variable
function fetchCatNames() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((breeds) => {
      const catNames = breeds.map((breed) => breed.name);
      console.log(catNames);
    })
    .catch((error) => {
      console.error("Error fetching cat breeds:", error);
    });
}

// Call the function to fetch and display cat names
fetchCatNames();
