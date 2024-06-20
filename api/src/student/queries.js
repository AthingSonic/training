const { text } = require("express");

const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const paginatedQuery = `SELECT * FROM students LIMIT $1 OFFSET $2`;
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
const addStudent =
  "INSERT INTO students (name, email, age, dob, password) VALUES ($1, $2, $3, $4, $5)";
const deleteAllStudents = "DELETE FROM students";
const deleteStudentById = "DELETE FROM students WHERE id = $1";
const loginStudent = "SELECT * FROM students WHERE email = $1"
// Function to generate the dynamic update SQL query
const updateStudentQuery = (fields) => {
  const setClause = fields
    .map((field, index) => `${field} = $${index + 1}`)
    .join(", ");
  return `UPDATE students SET ${setClause} WHERE id = $${fields.length + 1}`;
};

module.exports = {
  getStudents,
  getStudentById,
  checkEmailExists,
  addStudent,
  loginStudent,
  deleteAllStudents,
  deleteStudentById,
  updateStudentQuery,
  paginatedQuery
};
