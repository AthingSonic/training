let countries = require('../countries')
// Use console.group() to group logs
console.log(`Use console.group() to group logs`);
console.log(`task 3`);
countries.forEach(country => {
    console.group(country.name);
    console.log(`Capital: ${country.capital}`);
    console.log(`Languages: ${country.languages.join(', ')}`);
    console.log(`Population: ${country.population}`);
    console.log(`Flag: ${country.flag}`);
    console.log(`Currency: ${country.currency}`);
    console.groupEnd();
});