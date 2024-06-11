const readline = require('readline');

// Create an interface to read data from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to determine the number of days in a month, considering leap years
function getDaysInMonth(month, year) {
  // Months in JavaScript are zero-indexed (0 for January, 11 for December)
  // To get the number of days in a month, create a date for the 0th day of the next month
  return new Date(year, month + 1, 0).getDate();
}

// Prompt the user for month and year
rl.question('Please enter a month (1-12): ', (monthInput) => {
  rl.question('Please enter a year: ', (yearInput) => {
    const month = parseInt(monthInput, 10);
    const year = parseInt(yearInput, 10);

    // Validate input
    if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 1) {
      console.log('Please enter a valid month (1-12) and a valid year.');
    } else {
      // Get the number of days in the given month and year
      const days = getDaysInMonth(month - 1, year); // month - 1 because months are zero-indexed
      console.log(`The number of days in month ${month} of year ${year} is ${days}.`);
    }

    rl.close();
  });
});
