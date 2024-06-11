const readline = require('readline');

// Create an interface to read data from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a month (1-12): ', (monthInput) => {
  rl.question('Please enter a year: ', (yearInput) => {
    const month = parseInt(monthInput, 10);
    const year = parseInt(yearInput, 10);

    if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 1) {
      console.log('Please enter a valid month (1-12) and a valid year.');
    } else {
      // Function to determine the number of days in a month
      function getDaysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
      }

      const days = getDaysInMonth(month, year);
      console.log(`The number of days in month ${month} of year ${year} is ${days}.`);
    }

    rl.close();
  });
});
