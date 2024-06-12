let countries = require('../countries')

// Display the countries object as a table
console.log(`Display the countries object as a table`);
console.log(`task 2`);
// Convert array to object
const countriesObject = {};
countries.forEach((country, index) => {
    countriesObject[index] = country;
});

// Display as table
console.table(countriesObject);