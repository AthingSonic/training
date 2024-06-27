import jwtGenerator from "../utils/jwtGenerator";
import * as queries from "./queries";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import pool from "../db";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Please fill all the required details",
      data: req.body,
    });
  }

  try {
    // check if the student exists
    const studentResult = await pool.query(queries.loginStudent, [email]);

    if (studentResult.rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const student = studentResult.rows[0];

    // verify the password
    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // generate jwt token
    const jwtToken = jwtGenerator(student.id);

    // Set cookie and respond with student details and token

    return res
      .cookie("token", jwtToken, { httpOnly: true })
      .status(200)
      .json({
        message: "Successfully logged in",
        student: {
          id: student.id,
          email: student.email,
        },
        jwtToken,
      });
  } catch (error: any) {
    console.log("Login error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logoutUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const token = req.cookies.token;

    if (!token) {
      // If token cookie is not set or empty
      return res.status(401).json({
        message: "Token cookie is empty or not set.",
      });
    }
    /* maxAge is the age of the cookie which is one milisecond, and removing the token value with empty string '' */
    res.cookie("token", "", { maxAge: 1 });
    return res.status(200).json({ message: "Succesfully logged out" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, email, age, dob, password } = req.body;

  //  input validation
  if (!name || !email || !age || !dob || !password) {
    return res.status(400).json({
      message: "Please fill all the required details",
      data: req.body,
    });
  }

  // Validate email format
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email format",
    });
  }

  // validate password length
  if (password.length < 6) {
    return res.status(400).json({
      message: "Password should be at least 6 characters long",
    });
  }

  try {
    // hash the password
    const salt: string = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // check if email alrady exists
    const emailExists = await pool.query(queries.checkEmailExists, [email]);
    if (emailExists.rows.length > 0) {
      return res.status(400).json({
        message: "email already exists",
      });
    }

    // add new student
    await pool.query(queries.addStudent, [
      name,
      email,
      age,
      dob,
      bcryptPassword,
    ]);

    // retrieve the newly added student
    const result = await pool.query(
      "SELECT * FROM students ORDER BY id DESC LIMIT 1"
    );
    const newStudent = result ? result.rows[0] : {};

    // generae jwt token
    const jwtToken: string = jwtGenerator(newStudent.id);

    return res.cookie("token", jwtToken, { httpOnly: true }).status(201).json({
      message: "Successfully added student",
      newStudent,
      jwtToken,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getStudents = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const results = await pool.query(queries.getStudents);

    if (results.rows.length <= 0) {
      return res.status(404).json({
        message: "No data available",
      });
    }

    return res.status(200).json({
      message: "successfully fetched all students",
      data: results.rows,
    });
  } catch (error: any) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export const getStudentsPagination = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    // Extract and parse page and pageSize from the request body
    const page: number = parseInt(req.body.page, 10);
    const pageSize: number = parseInt(req.body.pageSize, 10);

    // Validate page and pageSize to ensure they are positive integers
    if (isNaN(page) || isNaN(pageSize) || page < 1 || pageSize < 1) {
      return res.status(400).json({
        error:
          "Invalid page or pageSize value. Both must be positive integers.",
      });
    }

    const offset: number = (page - 1) * pageSize;
    // Query the database with pagination parameters
    const results = await pool.query(queries.paginatedQuery, [
      pageSize,
      offset,
    ]);

    // Check if there are no results
    if (results.rowCount === 0) {
      return res.status(404).json({ message: "No data available" });
    }

    // Return the results
    return res.status(200).json({
      message: "successfully fetched data",
      data: results.rows,
    });
  } catch (error: any) {
    if (error instanceof SyntaxError) {
      return res.status(400).json({ error: "Invalid JSON payload" });
    } else {
      return res.status(500).json({ error: error.message });
    }
  }
};

export const getStudentById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      error: "Invalid student ID",
    });
  }

  try {
    const results = await pool.query(queries.getStudentById, [id]);

    if (results.rowCount === 0) {
      return res.status(404).json({
        message: `No student found with ID: ${id}`,
      });
    }

    return res.status(200).json(results.rows[0]);
  } catch (error: any) {
    return res.status(500).json({
      error: `Database error: ${error.message}`,
    });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    let id: number = parseInt(req.params.id);
    const { name, email, age, dob } = req.body;
    const fields: string[] = [];
    const values: any[] = [];

    if (name !== undefined) {
      fields.push("name");
      values.push(name);
    }
    if (email !== undefined) {
      fields.push("email");
      values.push(email);
    }
    if (age !== undefined) {
      fields.push("age");
      values.push(age);
    }
    if (dob !== undefined) {
      fields.push("dob");
      values.push(dob);
    }

    if (fields.length === 0) {
      return res.status(400).json({ message: "No fields provided for update" });
    }

    // Add id to values array for query
    values.push(id);

    // Execute the update query using async-await
    const results = await pool.query(
      queries.updateStudentQuery(fields),
      values
    );

    if (results.rowCount === 0) {
      return res
        .status(404)
        .json({ message: `No student found with id: ${id}` });
    }

    res
      .status(200)
      .json({ message: `Successfully updated student with id: ${id}` });
  } catch (error: any) {
    // Handle any errors that occur during the async operations
    res.status(500).json({ error: error.message });
  }
};

export const deleteStudentById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  // Validate the ID parameter
  if (isNaN(id)) {
    return res.status(400).json({
      message: "Invalid student ID",
    });
  }

  try {
    const results = await pool.query(queries.deleteStudentById, [id]);

    if (results.rowCount === 0) {
      return res.status(404).json({
        message: `No student found with id`,
      });
    }

    return res.status(204).json({
      message: `Successfully deleted student`,
    });
  } catch (error: any) {
    res.status(500).json({
      error: "Database error",
      details: error.message,
    });
  }
};

export const deleteAllStudents = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const results = await pool.query(queries.deleteAllStudents);

    if (results.rowCount === 0) {
      return res.status(404).json({
        message: "Empty table, no data to delete",
      });
    } else {
      return res.status(204).json({
        message: "Successfully deleted all students from the table",
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
