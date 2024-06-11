// Enable readline module for better input handling
const readline = require('readline');

// Create an interface to read data from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your age: ', (answer) => {

  let age = parseInt(answer, 10)

  if (isNaN(age) || age < 0) {
    console.log('Please enter a valid positive number.');
  }else if(age >= 18){
    console.log('You are old enough to drive');
  }else{
    let years = 18-age
    console.log(`wait for ${years} year more`);
  }
  rl.close();
});
