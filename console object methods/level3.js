// Check the speed difference among the following loops: while, for, for of, forEach
console.log(`Check the speed difference among the following loops: while, for, for of, forEach`);
// Create an array with a large number of elements
const arr = new Array(1000000).fill(0);

// Measure time taken by while loop
let start = performance.now();
let i = 0;
while (i < arr.length) {
    i++;
}
let end = performance.now();
console.log("Time taken by while loop:", end - start, "milliseconds");

// Measure time taken by for loop
start = performance.now();
for (let i = 0; i < arr.length; i++) {
}
end = performance.now();
console.log("Time taken by for loop:", end - start, "milliseconds");

// Measure time taken by for...of loop
start = performance.now();
for (const element of arr) {
}
end = performance.now();
console.log("Time taken by for...of loop:", end - start, "milliseconds");

// Measure time taken by forEach loop
start = performance.now();
arr.forEach(element => {
});
end = performance.now();
console.log("Time taken by forEach loop:", end - start, "milliseconds");
