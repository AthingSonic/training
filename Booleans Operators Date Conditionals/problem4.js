// Enable readline module for better input handling
const readline = require('readline');

// Create an interface to read data from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please a number: ', (answer) => {

  let num = parseInt(answer, 10)

  if (isNaN(num) || num < 0) {
    console.log('Please enter a valid positive number.');
  }else{
    if(num%2 !== 0){
        console.log(`${num} is an odd number`);
    }else{
        console.log(`${num} is an even number`);
    }
  }
  rl.close();
});