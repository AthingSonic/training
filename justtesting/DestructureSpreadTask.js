// array destructuring
console.log("*********Array Destructuring*********");
let array1 = [1, 2, 3, 4, 5]
let [ indexOne, indexTwo, , indexFour, indexFive ] = array1;

console.log(indexOne);
console.log(indexTwo)
console.log(indexFour)
console.log(indexFive)

// object destructuring 
console.log('*********object destructuring*********');
let object = {
    name: "Nishant",
    age: 24, 
    height: '20 meters',
    weight: '70 KG'
}

let { name, salary = 100, weight } = object;

console.log(name)
console.log(salary)
console.log(weight)

// array spreading
console.log('*********array spreading*********');
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]

let arr3 = [...arr1, ...arr2]
console.log(arr3)

// object spreading
console.log('*********object spreading*********');
let obj1 = {
    firstName: "Nishant",
    age: 24, 
    salary: 300,
}

let obj2 = {
    lastName: "Kumar",
    height: '20 meters',
    weight: '70 KG'
}

let obj3 = {...obj1, ...obj2}
console.log(obj3);
