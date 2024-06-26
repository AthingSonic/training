"use strict";
// Import necessary types from Express if needed
// import { text } from 'express';
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudentQuery = exports.loginStudent = exports.deleteStudentById = exports.deleteAllStudents = exports.addStudent = exports.checkEmailExists = exports.paginatedQuery = exports.getStudentById = exports.getStudents = void 0;
// Define SQL queries as constants
exports.getStudents = "SELECT * FROM students";
exports.getStudentById = "SELECT * FROM students WHERE id = $1";
exports.paginatedQuery = `SELECT * FROM students LIMIT $1 OFFSET $2`;
exports.checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
exports.addStudent = "INSERT INTO students (name, email, age, dob, password) VALUES ($1, $2, $3, $4, $5)";
exports.deleteAllStudents = "DELETE FROM students";
exports.deleteStudentById = "DELETE FROM students WHERE id = $1";
exports.loginStudent = "SELECT * FROM students WHERE email = $1";
// Function to generate the dynamic update SQL query
const updateStudentQuery = (fields) => {
    const setClause = fields
        .map((field, index) => `${field} = $${index + 1}`)
        .join(", ");
    return `UPDATE students SET ${setClause} WHERE id = $${fields.length + 1}`;
};
exports.updateStudentQuery = updateStudentQuery;
