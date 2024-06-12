const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

//Change skills array to JSON using JSON.stringify()
console.log(`Change skills array to JSON using JSON.stringify()`);
const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON);

// Stringify the age variable
console.log(`Stringify the age variable`);
const ageJSON = JSON.stringify(age);
console.log(ageJSON);

// Stringify the isMarried variable
console.log(`Stringify the isMarried variable`);
const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON);

// Stringify the student object
console.log(`Stringify the student object`);
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
