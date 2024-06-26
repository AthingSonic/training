
import jwtGenerator from "../utils/jwtGenerator";
import * as queries from "./queries";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import pool from "../db";

export const register = async (req: Request, res: Response) => {
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
