const readline = require('readline');

// Create an interface to read data from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('Days');
console.log('sunday, monday, tuesday, wednesday, thursday, friday, saturday');

rl.question('What is the day today: ', (input) => {
  const day = input.trim().toLowerCase();

  if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    console.log(`${day} is a working day`);
  }else if(day === "sunday" || day === "saturday"){
    console.log(`${day} is a weekend`);
  }else {
    console.log('Please enter a valid day.');
    rl.close();
    return;
  }
  
  rl.close();
});
