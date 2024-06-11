const readline = require('readline');

// Create an interface to read data from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('months');
console.log('january, february, march, april, may, june, july, august, september, october, december');

rl.question('Please enter a month: ', (input) => {
  const month = input.trim().toLowerCase();

  let season = '';

  if (month === "september" || month === "october" || month === "november") {
    season = 'Autumn';
  } else if (month === "december" || month === "january" || month === "february") {
    season = 'Winter';
  } else if (month === "march" || month === "april" || month === "may") {
    season = 'Spring';
  } else if (month === "june" || month === "july" || month === "august") {
    season = 'Summer';
  } else {
    console.log('Please enter a valid month.');
    rl.close();
    return;
  }

  console.log(`In ${input.trim()} the season is ${season}.`);
  rl.close();
});
