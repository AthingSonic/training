// Import necessary types from Express if needed
// import { text } from 'express';

// Define SQL queries as constants
export const getStudents: string = "SELECT * FROM students";
export const getStudentById: string = "SELECT * FROM students WHERE id = $1";
export const paginatedQuery: string = `SELECT * FROM students LIMIT $1 OFFSET $2`;
export const checkEmailExists: string = "SELECT s FROM students s WHERE s.email = $1";
export const addStudent: string = "INSERT INTO students (name, email, age, dob, password) VALUES ($1, $2, $3, $4, $5)";
export const deleteAllStudents: string = "DELETE FROM students";
export const deleteStudentById: string = "DELETE FROM students WHERE id = $1";
export const loginStudent: string = "SELECT * FROM students WHERE email = $1";

// Function to generate the dynamic update SQL query
export const updateStudentQuery = (fields: string[]): string => {
  const setClause = fields
    .map((field, index) => `${field} = $${index + 1}`)
    .join(", ");
  return `UPDATE students SET ${setClause} WHERE id = $${fields.length + 1}`;
};
