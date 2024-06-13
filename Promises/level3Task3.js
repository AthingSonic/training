//Read the countries api and count total number of languages in the world used as officials.
// Define the URL for the REST Countries API
const url = "https://restcountries.com/v2/all";

// Function to fetch data from the API and count the total number of unique official languages
function fetchTotalLanguages() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((countries) => {
      const languageSet = new Set();

      // Loop through each country and add its official languages to the set
      countries.forEach((country) => {
        if (country.languages) {
          country.languages.forEach((language) => {
            languageSet.add(language.name);
          });
        }
      });

      // The size of the set is the number of unique official languages
      console.log(
        `Total number of unique official languages: ${languageSet.size}`
      );
    })
    .catch((error) => {
      console.error("Error fetching countries:", error);
    });
}

// Call the function to fetch and count the total number of unique official languages
fetchTotalLanguages();
