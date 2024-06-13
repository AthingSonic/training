// Read the countries API using fetch and print the name of country, capital, languages, population and area

// Define the URL for the REST Countries API
const url = "https://restcountries.com/v2/all";

// Function to fetch data from the API and display required information
function fetchCountries() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((countries) => {
      // Loop through each country and print the required information
      countries.forEach((country) => {
        console.log(`Country: ${country.name}`);
        console.log(`Capital: ${country.capital}`);
        console.log(
          `Languages: ${country.languages.map((lang) => lang.name).join(", ")}`
        );
        console.log(`Population: ${country.population}`);
        console.log(`Area: ${country.area}`);
        console.log("--------------------------");
      });
    })
    .catch((error) => {
      console.error("Error fetching countries:", error);
    });
}

// Call the function to fetch and display country information
fetchCountries();
