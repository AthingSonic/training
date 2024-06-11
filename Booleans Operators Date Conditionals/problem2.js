// Enable readline module for better input handling
const readline = require('readline');

// Create an interface to read data from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter myAge age: ', (firstAnswer) => {

  let myAge = parseInt(firstAnswer, 10);

  if (isNaN(myAge) || myAge < 0) {
    console.log('Please enter a valid positive number for myAge.');
    rl.close();
  } else {
    rl.question('Please enter yourAge: ', (secondAnswer) => {

      let yourAge = parseInt(secondAnswer, 10);

      if (isNaN(yourAge) || yourAge < 0) {
        console.log('Please enter a valid positive number for yourAge.');
      } else {
        if (myAge > yourAge) {
          console.log(`myAge: ${myAge} is greater than yourAge: ${yourAge}`);
        } else if (myAge < yourAge) {
            console.log(`yourAge: ${yourAge} is greater than myAge: ${myAge} `);
        } else {
          console.log('Both persons are of the same age.');
        }
      }

      rl.close();
    });
  }
});
