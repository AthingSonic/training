const { text } = require("express");

const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
const addStudent =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const deleteAllStudents = "DELETE FROM students";
const deleteStudentById = "DELETE FROM students WHERE id = $1";
// Function to generate the dynamic update SQL query
const updateStudentQuery = (fields) => {
  const setClause = fields.map((field, index) => `${field} = $${index + 1}`).join(", ");
  return `UPDATE students SET ${setClause} WHERE id = $${fields.length + 1}`;
};

module.exports = {
  getStudents,
  getStudentById,
  checkEmailExists,
  addStudent,
  deleteAllStudents,
  deleteStudentById,
  updateStudentQuery
};
