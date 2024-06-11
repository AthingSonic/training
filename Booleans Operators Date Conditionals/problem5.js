// Enable readline module for better input handling
const readline = require('readline');

// Create an interface to read data from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please your score: ', (answer) => {

  let marks = parseInt(answer, 10)

  if (isNaN(marks) || marks<0 || marks>100) {
    console.log('Please enter a valid positive number between 0 and 100.');
  }else{
    if(marks >= 80 && marks <= 100){
        console.log(`marks: ${marks} grade: A`);
    }else if(marks >= 70 && marks <= 89){
        console.log(`marks: ${marks} grade: B`);
    }else if(marks >= 60 && marks <= 69){
        console.log(`marks: ${marks} grade: C`);
    }else if(marks >= 50 && marks <= 59){
        console.log(`marks: ${marks} grade: D`);
    }else if(marks >= 0 && marks <= 49){
        console.log(`marks: ${marks} grade: F`);
    }
  }
  rl.close();
});