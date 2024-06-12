const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
//   Stringify the students object with only firstName, lastName and skills properties
console.log(
  `Stringify the students object with only firstName, lastName and skills properties`
);

const studentSubset = {
  firstName: student.firstName,
  lastName: student.lastName,
  skills: student.skills,
};

const studentJSON = JSON.stringify(studentSubset);
console.log(studentJSON);
