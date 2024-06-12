// Write a function name rgbColorGenerator and it generates rgb colors.
console.log('Write a function name rgbColorGenerator and it generates rgb colors.');
function rgbColorGenerator(){
    function getRandomInt(max){
        return Math.floor(Math.random()*max)
    }

    let r = getRandomInt(256)
    let g = getRandomInt(256)
    let b = getRandomInt(256)

    const rgbColor = `rgb(${r}, ${g}, ${b})`

    console.log(rgbColor);
    return rgbColor
}
rgbColorGenerator()

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
console.log('Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.');
function arrayOfHexaColors(numOfColors){

    function generateHexColor(){
        let hexCharacters = '0123456789ABCDEF'
        let hexColor = '#'
        for(let i=0; i<6; i++){
            const randomIndex = Math.floor(Math.random()*hexCharacters.length)
            hexColor += hexCharacters[randomIndex]
        }
        return hexColor
    }

    const hexColors = []
    for(let i=0; i<numOfColors; i++){
        hexColors.push(generateHexColor())
    }

    return hexColors
}
const numOfColors = Math.floor(Math.random()*10)+1
const colors = arrayOfHexaColors(numOfColors)
console.log(colors);

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
console.log('Write a function arrayOfRgbColors which return any number of RGB colors in an array.');
function arrayOfRgbColors(numColors) {
    // Function to generate a single random RGB color
    function generateRgbColor() {
        const r = Math.floor(Math.random() * 256); // Red component
        const g = Math.floor(Math.random() * 256); // Green component
        const b = Math.floor(Math.random() * 256); // Blue component
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Generate the specified number of RGB colors
    const rgbColors = [];
    for (let i = 0; i < numColors; i++) {
        rgbColors.push(generateRgbColor());
    }

    // Return the array of generated RGB colors
    return rgbColors;
}

// Example usage
const numofRGBColorsRandom = Math.floor(Math.random()*10)+1; // Specify the number of RGB colors you want to generate
const rgbColors = arrayOfRgbColors(numofRGBColorsRandom);
console.log(rgbColors);


// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
console.log('Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.');
function convertHexaToRgb(hex) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');

    // Parse the r, g, b values
    let r, g, b;
    if (hex.length === 3) {
        // If the hex code is in shorthand form (e.g. #03F)
        r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
        g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
        b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
    } else if (hex.length === 6) {
        // If the hex code is in full form (e.g. #0033FF)
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    } else {
        throw new Error('Invalid hexadecimal color.');
    }

    return `rgb(${r}, ${g}, ${b})`;
}

// Example usage
const hexColor = '#03F'; // You can test with '#0033FF' or other hex colors
const rgbColor = convertHexaToRgb(hexColor);
console.log(`conveting #03F to rgb`);
console.log(rgbColor); // Output will be in the form "rgb(r, g, b)"


// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
console.log('Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.');

function convertRgbToHexa(r, g, b) {
    // Function to convert a single component to a two-character hexadecimal string
    function componentToHex(component) {
        const hex = component.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }

    // Convert each RGB component to its hexadecimal form and concatenate
    const hexColor = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

    return hexColor;
}

// Example usage
// const r = 0;
// const g = 51;
// const b = 255;
const hexColorConvert = convertRgbToHexa(0, 51, 255);
console.log(`converting rgb(0, 51, 255) to hex`);
console.log(hexColorConvert); // Output will be in the form "#0033FF"

// Write a function generateColors which can generate any number of hexa or rgb colors
console.log('Write a function generateColors which can generate any number of hexa or rgb colors');
function generateColors(type, numColors) {
    // Function to generate a single random hexadecimal color
    function generateHexColor() {
        const hexCharacters = '0123456789ABCDEF';
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * hexCharacters.length);
            hexColor += hexCharacters[randomIndex];
        }
        return hexColor;
    }

    // Function to generate a single random RGB color
    function generateRgbColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Generate the specified number of colors
    const colors = [];
    for (let i = 0; i < numColors; i++) {
        if (type === 'hexa') {
            colors.push(generateHexColor());
        } else if (type === 'rgb') {
            colors.push(generateRgbColor());
        } else {
            throw new Error('Invalid color type. Use "hexa" or "rgb".');
        }
    }

    // If only one color is requested, return it as a single value instead of an array
    return numColors === 1 ? colors[0] : colors;
}

// Example usage
console.log(generateColors('hexa', 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)); // '#b334ef'
console.log(generateColors('rgb', 3));  // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1));  // 'rgb(15, 26, 80)'


// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
console.log('Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array');
function shuffleArray(array) {
    // Create a copy of the array to avoid modifying the original array
    const shuffledArray = array.slice();

    // Shuffle the array using the Fisher-Yates algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

// Example usage
const originalArray = [1, 2, 3, 4, 5];
const shuffled = shuffleArray(originalArray);
console.log(shuffled);
console.log(originalArray); // Ensures the original array is not modified


// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
console.log('Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number');
function factorial(n) {
    // Ensure the input is a non-negative integer
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error('Input must be a non-negative integer');
    }

    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }

    // Recursive case: n! = n * (n - 1)!
    return n * factorial(n - 1);
}

// Example usage
console.log(factorial(5)); // 120


// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
console.log('Call your function isEmpty, it takes a parameter and it checks if it is empty or not');
function isEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === 'string' && value.trim() === '') {
        return true;
    }

    if (Array.isArray(value) && value.length === 0) {
        return true;
    }

    if (typeof value === 'object' && Object.keys(value).length === 0) {
        return true;
    }

    return false;
}

// Example usage
console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty('')); // true
console.log(isEmpty([])); // true
console.log(isEmpty({})); // true

console.log(isEmpty(0)); // false
console.log(isEmpty('hello')); // false
console.log(isEmpty([1, 2, 3])); // false
console.log(isEmpty({ key: 'value' })); // false


// Call your function sum, it takes any number of arguments and it returns the sum
console.log('Call your function sum, it takes any number of arguments and it returns the sum');
function sum(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

// Example usage
console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50
console.log(sum(2, 4, 6, 8, 10)); // 30
console.log(sum(3, 6, 9, 12, 15, 18)); // 63

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback
console.log('Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback');


function sumOfArrayItems(arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        return "Input is not an array.";
    }

    // Check if all items in the array are numbers
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
            return "Array contains non-numeric values.";
        }
    }

    // Calculate the sum of array items
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}

// Example usage
console.log(sumOfArrayItems([1, 2, 3])); // 6
console.log(sumOfArrayItems([5, 10, 15, 20])); // 50
console.log(sumOfArrayItems([2, 4, 6, 8, 10])); // 30
console.log(sumOfArrayItems([3, 6, 9, 12, 15, 18])); // 63
console.log(sumOfArrayItems([1, 2, '3'])); // "Array contains non-numeric values."
console.log(sumOfArrayItems('not an array')); // "Input is not an array."


// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
console.log('Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.');
function average(arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        return "Input is not an array.";
    }

    // Check if the array is empty
    if (arr.length === 0) {
        return "Array is empty.";
    }

    // Check if all items in the array are numbers
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
            return "Array contains non-numeric values.";
        }
    }

    // Calculate the sum of array items
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // Calculate the average
    const avg = sum / arr.length;
    return avg;
}

// Example usage
console.log(average([1, 2, 3])); // 2
console.log(average([5, 10, 15, 20])); // 12.5
console.log(average([2, 4, 6, 8, 10])); // 6
console.log(average([3, 6, 9, 12, 15, 18])); // 10.5
console.log(average([1, 2, '3'])); // "Array contains non-numeric values."
console.log(average([])); // "Array is empty."
console.log(average('not an array')); // "Input is not an array."


// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
console.log(`Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.`);
function modifyArray(arr) {
    // Check if array length is less than 5
    if (arr.length < 5) {
        return 'Item not found';
    }

    // Modify the fifth item (index 4) of the array to uppercase
    arr[4] = arr[4].toUpperCase();

    return arr;
}

// Example usage
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
// Output: ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']

console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft', 'IBM']));
// Output: ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT', 'IBM']

console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));
// Output: 'Item not found'


// Write a function called isPrime, which checks if a number is prime number.
console.log(`Write a function called isPrime, which checks if a number is prime number.`);
function isPrime(num) {
    // Check if the number is less than 2, which is not a prime number
    if (num < 2) {
        return false;
    }

    // Check if the number is divisible by any integer from 2 to its square root
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    // If the number passes all checks, it is a prime number
    return true;
}

// Example usage
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false

// Write a functions which checks if all items are unique in the array.
console.log(`Write a functions which checks if all items are unique in the array.`);
function areAllUnique(arr) {
    // Create an empty object to store unique items
    const uniqueItems = {};

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If the item is already in the object, it's not unique
        if (uniqueItems[arr[i]]) {
            return false;
        }
        // Otherwise, add it to the object
        else {
            uniqueItems[arr[i]] = true;
        }
    }

    // If the loop completes, all items are unique
    return true;
}

// Example usage
console.log(areAllUnique([1, 2, 3, 4, 5])); // true
console.log(areAllUnique([1, 2, 3, 4, 5, 1])); // false
console.log(areAllUnique(['a', 'b', 'c', 'd'])); // true
console.log(areAllUnique(['a', 'b', 'c', 'd', 'd'])); // false


// Write a function which checks if all the items of the array are the same data type. 
console.log(`Write a function which checks if all the items of the array are the same data type. `);
function areAllSameType(arr) {
    // If the array has fewer than 2 items, they are considered the same type
    if (arr.length < 2) {
        return true;
    }

    // Get the data type of the first item
    const typeOfFirstItem = typeof arr[0];

    // Check if all other items have the same data type as the first item
    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== typeOfFirstItem) {
            return false;
        }
    }

    // If the loop completes, all items have the same data type
    return true;
}

// Example usage
console.log(areAllSameType([1, 2, 3, 4, 5])); // true (all items are numbers)
console.log(areAllSameType(['a', 'b', 'c', 'd'])); // true (all items are strings)
console.log(areAllSameType([1, 'two', 3])); // false (items are of different types)
console.log(areAllSameType([true, false, true])); // true (all items are booleans)
console.log(areAllSameType([])); // true (empty array is considered to have the same type)
console.log(areAllSameType([null, null, null])); // true (all items are null, which is of type 'object')



// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
console.log(`JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.`);
function isValidVariable(variableName) {
    // Regular expression to match valid variable names
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

    // Test the variable name against the regular expression
    return regex.test(variableName);
}

// Example usage
console.log(isValidVariable('validVariable')); // true
console.log(isValidVariable('_validVariable')); // true
console.log(isValidVariable('$validVariable')); // true
console.log(isValidVariable('9invalidVariable')); // false
console.log(isValidVariable('invalid-variable')); // false
console.log(isValidVariable('')); // false
console.log(isValidVariable('123')); // false


/*Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
sevenRandomNumbers()
*/
console.log(`Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.`);
function sevenRandomNumbers() {
    const numbers = [];
    while (numbers.length < 7) {
        const randomNum = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers;
}

// Example usage
console.log(sevenRandomNumbers());

// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
console.log(`Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array`);
function reverseCountries(countries) {
    // Make a copy of the original array
    const countriesCopy = [];

    // Iterate over the original array in reverse order and push each element to the copy
    for (let i = countries.length - 1; i >= 0; i--) {
        countriesCopy.push(countries[i]);
    }

    return countriesCopy;
}

// Example usage
const countries = ['USA', 'Canada', 'Australia', 'Japan'];
console.log(countries);
const reversed = reverseCountries(countries);
console.log(reversed); // Output will be ['Japan', 'Australia', 'Canada', 'USA']
