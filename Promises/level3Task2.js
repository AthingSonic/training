// Read the countries api and find out the 10 largest countries
console.log(
  `*********************Read the countries api and find out the 10 largest countries*********************`
);
// Define the URL for the REST Countries API
const url = "https://restcountries.com/v2/all";

// Function to fetch data from the API and find the 10 largest countries by area
function fetchLargestCountries() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((countries) => {
      // Sort countries by area in descending order
      const sortedCountries = countries.sort((a, b) => b.area - a.area);

      // Get the top 10 largest countries by area
      const largestCountries = sortedCountries.slice(0, 10);

      // Print the names and areas of the largest countries
      largestCountries.forEach((country) => {
        console.log(`Country: ${country.name}, Area: ${country.area} sq km`);
      });
    })
    .catch((error) => {
      console.error("Error fetching countries:", error);
    });
}

// Call the function to fetch and display the largest countries
fetchLargestCountries();
