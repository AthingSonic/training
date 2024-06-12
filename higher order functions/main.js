const products = [
    { name: 'Rice', price: 35 },
    { name: 'Potato', price: 15 },
    { name: 'Dal', price: 20 },
    { name: 'Atta', price: 40 },
    { name: 'Toothpaste', price: 30 }
  ];

  const countries = [
    'India',
    'Somalia',
    'Indonesia',
    'Albania',
    'Congo',
    'Finland',
    'Iceland',
    'Greenland',
    'Ireland',
    'Thailand',
    'Pakistan',
    'Afghanistan'
  ];


//   Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
console.log(`Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))`);
const totalPrice = products.map(product => product.price).reduce((acc, curr) => acc + curr, 0);
console.log(totalPrice); 

// Find the sum of price of products using only reduce reduce(callback))
console.log(`Find the sum of price of products using only reduce reduce(callback))`);
const totalPriceReduce = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPriceReduce);

/*Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).*/ 
console.log(`Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).`);

function categorizeCountries(pattern) {
    return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
  }
  
  // Example usage:
  console.log(categorizeCountries('land')); // Outputs countries containing 'land'
  console.log(categorizeCountries('ia')); // Outputs countries containing 'ia'
  console.log(categorizeCountries('island')); // Outputs countries containing 'island'
  console.log(categorizeCountries('stan')); // Outputs countries containing 'stan'

//   Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
console.log(`Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.`);
function countStartingLetters(countries) {
    const letterCount = {};
    
    countries.forEach(country => {
      const firstLetter = country.charAt(0).toUpperCase();
      if (letterCount[firstLetter]) {
        letterCount[firstLetter]++;
      } else {
        letterCount[firstLetter] = 1;
      }
    });
    
    const result = [];
    for (const letter in letterCount) {
      result.push({ letter: letter, count: letterCount[letter] });
    }
    
    return result;
  }
  

  // Example usage:
  console.log(countStartingLetters(countries));
  function getFirstTenCountries(countries) {
    return countries.slice(0, 10);
  }
  
  //   Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
console.log(`Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array`);
  // Example usage:
  console.log(getFirstTenCountries(countries));

//   Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
console.log(`Declare a getLastTenCountries function which which returns the last ten countries in the countries array.`);
function getLastTenCountries(countries) {
    return countries.slice(-10);
  }
  
  // Example usage:
  console.log(getLastTenCountries(countries));


  //Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
console.log(`Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
`);
  function mostFrequentInitialLetter(countries) {
    const letterCount = {};
  
    countries.forEach(country => {
      const firstLetter = country.charAt(0).toUpperCase();
      if (letterCount[firstLetter]) {
        letterCount[firstLetter]++;
      } else {
        letterCount[firstLetter] = 1;
      }
    });
  
    let maxCount = 0;
    let mostFrequentLetter = '';
  
    for (const letter in letterCount) {
      if (letterCount[letter] > maxCount) {
        maxCount = letterCount[letter];
        mostFrequentLetter = letter;
      }
    }
  
    return mostFrequentLetter;
  }
  
  // Example usage:
  console.log(mostFrequentInitialLetter(countries));