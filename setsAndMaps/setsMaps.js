const countriesFile = require('../countries.js')
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// Find a union b
console.log(`Find a union b`);
// Concatenate the arrays and create a Set to remove duplicates
const union = Array.from(new Set([...a, ...b]));
console.log(union); // Output: [4, 5, 8, 9, 3, 7]

// Find a intersection b
console.log(`Find a intersection b`);
const intersection = a.filter(value => b.includes(value));
console.log(intersection); // Output: [4, 5]

// Find a with b
console.log(`Find a with b`);
const aWithoutB = a.filter(value => !b.includes(value));
console.log(aWithoutB); // Output: [8, 9]

// create an empty set
console.log(`create an empty set`);
const emptySet = new Set();
console.log(emptySet); // Output: Set(0) {}

// Create a set containing 0 to 10 using loop
console.log(`Create a set containing 0 to 10 using loop`);
const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
    numberSet.add(i);
}
console.log(numberSet); // Output: Set(11) { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }


// Remove an element from a set
console.log(`Remove an element from a set`);
// Remove element 3
numberSet.delete(3);
console.log(numberSet); // Output: Set(4) { 1, 2, 4, 5 }


// Clear a set
console.log(`Clear a set`);
// Clear all elements from the Set
numberSet.clear();
console.log(numberSet); // Output: Set(0) {}


// Create a set of 5 string elements from array
console.log(`Create a set of 5 string elements from array`);
const array = ["apple", "banana", "orange", "grape", "kiwi", "pineapple"];
// Select first 5 elements from the array
const selectedElements = array.slice(0, 5);
// Create a set from the selected elements
const stringSet = new Set(selectedElements);
console.log(stringSet); // Output: Set(5) { 'apple', 'banana', 'orange', 'grape', 'kiwi' }


// Create a map of countries and number of characters of a country
console.log(`Create a map of countries and number of characters of a country`);
const countries = ["United States", "Canada", "United Kingdom", "Germany", "France"];
const countryCharCountMap = new Map();
countries.forEach(country => {
    countryCharCountMap.set(country, country.length);
});
console.log(countryCharCountMap);

 

// How many languages are there in the countries object file.
console.log(`How many languages are there in the countries object file.`);
const languageSet = new Set();

countriesFile.forEach(country => {
    country.languages.forEach(language => {
        languageSet.add(language);
    });
});

console.log(`There are ${languageSet.size} unique languages.`); 

// 

// Initialize an object to count language occurrences
const languageCount = {};

countriesFile.forEach(country => {
    country.languages.forEach(language => {
        if (languageCount[language]) {
            languageCount[language]++;
        } else {
            languageCount[language] = 1;
        }
    });
});

// Convert the languageCount object to an array of [language, count] pairs
const sortedLanguages = Object.entries(languageCount).sort((a, b) => b[1] - a[1]);

// Extract the top 10 languages
const top10Languages = sortedLanguages.slice(0, 10);

console.log('The top 10 most spoken languages are:');
top10Languages.forEach(([language, count], index) => {
    console.log(`${index + 1}. ${language}: ${count} countries`);
});