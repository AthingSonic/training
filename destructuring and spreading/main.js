let countriesObj = require("../countries") 

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]


// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
console.log(`Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.`);
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
console.log(`Destructure and assign the elements of countries array to fin, est, sw, den, nor`);
const [fin, est, sw, den, nor] = countries;

// Destructure the rectangle object by its properties or keys.
console.log(`Destructure the rectangle object by its properties or keys.`);
const { width, height, area, perimeter } = rectangle;


//Iterate through the users array and get all the keys of the object using destructuring
console.log(`Iterate through the users array and get all the keys of the object using destructuring`);
users.forEach(user => {
    const { name, scores, skills, age } = user;
    const keys = Object.keys(user);
    console.log(keys);
  });
  

//   Find the persons who have less than two skills
console.log(`Find the persons who have less than two skills`);
const personsWithLessThanTwoSkills = users.filter(user => user.skills.length < 2);
console.log(personsWithLessThanTwoSkills);


// Destructure the countries object print name, capital, population and languages of all countries
console.log(`Destructure the countries object print name, capital, population and languages of all countries`);
countriesObj.forEach(country => {
    const { name, capital, population, languages } = country;
    console.log(`Name: ${name}, Capital: ${capital}, Population: ${population}, Languages: ${languages}`);
  });
  


 /*
 A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  console.log(name, skills, jsScore, reactScore)

 */
  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, [,,jsScore, reactScore]] = student
console.log(name, skills, jsScore, reactScore);


// Write a function called convertArrayToObject which can convert the array to a structure object.
console.log(`Write a function called convertArrayToObject which can convert the array to a structure object.`);

function convertArrayToObject(students) {
    const studentObjects = students.map(([name, skills, scores]) => {
      return {
        name: name,
        skills: skills,
        scores: {
          HTM: scores[0],
          CSS: scores[1],
          JS: scores[2],
          React: scores[3]
        }
      };
    });
  
    return studentObjects;
  }
  
  const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ];
  
  console.log(convertArrayToObject(students));

  
/*
Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets
*/   

console.log(`
    Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets

    `);

    const student2 = {
        name: 'David',
        age: 25,
        skills: {
          frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
          ],
          backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
          ],
          dataBase: [
            { skill: 'MongoDB', level: 7.5 },
          ],
          dataScience: ['Python', 'R', 'D3.js']
        }
      };
      
      // Deep copy the original student object
      const newStudent = JSON.parse(JSON.stringify(student2));
      
      // Add Bootstrap with level 8 to the front end skill sets
      newStudent.skills.frontEnd.push({ skill: 'BootStrap', level: 8 });
      
      // Add Express with level 9 to the back end skill sets
      newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
      
      // Add SQL with level 8 to the database skill sets
      newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
      
      // Add SQL without level to the data science skill sets
      newStudent.skills.dataScience.push('SQL');
      
      console.log(newStudent);
      
    