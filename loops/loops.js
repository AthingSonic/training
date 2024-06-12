// Iterate 0 to 10 using for loop, do the same using while and do while loop
console.log(
  "Iterate 0 to 10 using for loop, do the same using while and do while loop"
);
console.log("for loop");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("while loop");
whileCounter = 0;
while (whileCounter <= 10) {
  console.log(whileCounter);
  whileCounter++;
}
console.log("do while loop");
doWhileCounter = 0;
do {
  console.log(doWhileCounter);
  doWhileCounter++;
} while (doWhileCounter <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
console.log(
  "Iterate 10 to 0 using for loop, do the same using while and do while loop"
);
console.log("for loop");
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

console.log("while loop");
let whileLoopRev = 10;
while (whileLoopRev >= 0) {
  console.log(whileLoopRev);
  whileLoopRev--;
}

console.log("do while loop");
let doWhileCounterRev = 10;
do {
  console.log(doWhileCounterRev);
  doWhileCounterRev--;
} while (doWhileCounterRev >= 0);

// Iterate 0 to n using for loop
console.log("Iterate 0 to n using for loop");
let n = 10;
console.log(`n: ${n}`);
for (let i = 0; i <= n; i++) {
  console.log(i);
}
/*
Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####    ######
    #####

    #######

*/
console.log(
  `Write a loop that makes the following pattern using console.log()`
);

for (let i = 1; i <= 7; i++) {
  let pattern = "";

  if (i !== 4 && i !== 6) {
    for (let j = 1; j <= i; j++) {
      pattern += "#";
    }
  } else if (i === 4) {
    for (let j = 1; j <= i; j++) {
      pattern += "#";
    }
    pattern += " ####";
  }

  console.log(pattern);
}

// Use loop to print the following pattern:
console.log("Use loop to print the following pattern:");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}x${i} = ${i * i}`);
}

// Using loop print the following pattern
console.log("Using loop print the following pattern");
console.log("i i^2 i^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`);
}

//Use for loop to iterate from 0 to 100 and print only even numbers
console.log(
  "Use for loop to iterate from 0 to 100 and print only even numbers"
);
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
console.log("Use for loop to iterate from 0 to 100 and print only odd numbers");
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
console.log(
  "Use for loop to iterate from 0 to 100 and print only prime numbers"
);
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Iterate from 0 to 100 and print prime numbers
for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers. The sum of all numbers from 0 to 100 is 5050.
console.log(
  "Use for loop to iterate from 0 to 100 and print the sum of all numbers. The sum of all numbers from 0 to 100 is 5050."
);
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`sum: ${sum}`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
console.log(
  "Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500."
);
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else if (i % 2 !== 0) {
    sumOdd += i;
  }
}
console.log(`sum of even: ${sumEven} sum of odd: ${sumOdd}`);
let sumArray = [sumEven, sumOdd];
console.log(`sum array: `, sumArray);

// Develop a small script which generate array of 5 random numbers
console.log("Develop a small script which generate array of 5 random numbers");
function random5Nums() {
  let arr = [];
  for (let i = 1; i <= 5; i++) {
    arr.push(Math.floor(Math.random() * 10) + 1);
  }
  return arr;
}
console.log(`Random array of 5 numbers`, random5Nums());

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
console.log(
  "Develop a small script which generate array of 5 random numbers and the numbers must be unique"
);
function random5NumsUnique() {
  let arr = [];
  while (true) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    if (!arr.includes(randomNum)) {
      arr.push(randomNum);
      if (arr.length === 5) {
        break;
      }
    }
  }
  return arr;
}
console.log(`Random array of 5 unique numbers`, random5NumsUnique());

// Develop a small script which generate a six characters random id:
console.log(
  "Develop a small script which generate a six characters random id:"
);

function randomId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";
  for (let i = 1; i <= 6; i++) {
    randomId += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomId;
}
console.log(`A six character random id: ${randomId()}`);
