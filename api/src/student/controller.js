const pool = require("../../db.js");
const jwtGenerator = require("../../utils/jwtGenerator.js");
const query = require("./queries.js");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Please fill all the required details",
      data: req.body,
    });
  }

  try {
    // Check if the student exists
    const studentResult = await pool.query(query.loginStudent, [email]);

    if (studentResult.rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const student = studentResult.rows[0];

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
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
          // Include other relevant fields, but avoid sensitive information
        },
        jwtToken,
      });
  } catch (error) {
    console.log("Login error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const register = async (req, res) => {
  const { name, email, age, dob, password } = req.body;
  // Input validation
  if (!name || !email || !age || !dob || !password) {
    return res.status(400).json({
      message: "Please fill all the required details",
      data: req.body,
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email format",
    });
  }

  // Validate password length
  if (password.length < 6) {
    return res.status(400).json({
      message: "Password should be at least 6 characters long",
    });
  }

  try {
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // Check if email already exists
    const emailExists = await pool.query(query.checkEmailExists, [email]);
    if (emailExists.rows.length > 0) {
      return res.status(400).json({
        message: "email already exists",
      });
    }

    // Add new student
    await pool.query(query.addStudent, [name, email, age, dob, bcryptPassword]);

    // Retrieve the newly added student
    const result = await pool.query(
      "SELECT * FROM students ORDER BY id DESC LIMIT 1"
    );
    const newStudent = result ? result.rows[0] : {};

    // Generate JWT token
    const jwtToken = jwtGenerator(newStudent.id);

    // Send response
    return res.cookie("token", jwtToken, { httpOnly: true }).status(201).json({
      message: "Successfully added student",
      newStudent,
      jwtToken,
    });
  } catch (error) {
    // Handle errors
    return res.status(500).json({
      error: error.message,
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    /* maxAge is the age of the cookie which is one milisecond, and removing the token value with empty string '' */
    res.cookie("token", "", { maxAge: 1 });
    return res.status(200).json({ message: "Succesfully logged out" });
  } catch (error) {
    return res.status(200).json({ error: error.message });
    // next(createError(500, "Error logging out user"));
  }
};

const getStudents = async (req, res) => {
  try {
    const results = await pool.query(query.getStudents);

    if (results.rowCount === 0) {
      return res.status(404).json({
        message: "No data available",
      });
    }

    return res.status(200).json(results.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getStudentsPagination = async (req, res) => {
  try {
    // Extract and parse page and pageSize from the request body
    const page = parseInt(req.body.page, 10);
    const pageSize = parseInt(req.body.pageSize, 10);

    // Validate page and pageSize to ensure they are positive integers
    if (isNaN(page) || isNaN(pageSize) || page < 1 || pageSize < 1) {
      return res.status(400).json({
        error:
          "Invalid page or pageSize value. Both must be positive integers.",
      });
    }

    const offset = (page - 1) * pageSize;

    // Query the database with pagination parameters
    const results = await pool.query(query.paginatedQuery, [pageSize, offset]);

    // Check if there are no results
    if (results.rowCount === 0) {
      return res.status(200).json({ message: "No data available" });
    }

    // Return the results
    return res.status(200).json(results.rows);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return res.status(400).json({ error: "Invalid JSON payload" });
    } else {
      return res.status(500).json({ error: error.message });
    }
  }
};

const getStudentById = async (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      error: "Invalid student ID",
    });
  }

  try {
    const results = await pool.query(query.getStudentById, [id]);

    if (results.rowCount === 0) {
      return res.status(404).json({
        message: `No student found with ID: ${id}`,
      });
    }

    return res.status(200).json(results.rows[0]);
  } catch (error) {
    return res.status(500).json({
      error: `Database error: ${error.message}`,
    });
  }
};

const deleteStudentById = async (req, res) => {
  const id = parseInt(req.params.id);

  // Validate the ID parameter
  if (isNaN(id)) {
    return res.status(400).json({
      error: "Invalid student ID",
    });
  }

  try {
    const results = await pool.query(query.deleteStudentById, [id]);

    if (results.rowCount === 0) {
      return res.status(404).json({
        message: `No student found with ID: ${id}`,
      });
    }

    res.status(200).json({
      message: `Successfully deleted student with ID: ${id}`,
    });
  } catch (error) {
    res.status(500).json({
      error: "Database error",
      details: error.message,
    });
  }
};

const deleteAllStudents = async (req, res) => {
  try {
    const results = await pool.query(query.deleteAllStudents);

    if (results.rowCount === 0) {
      return res.json({
        message: "Empty table, no data to delete",
      });
    } else {
      return res.status(200).json({
        message: "Successfully deleted all students from the table",
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    const { name, email, age, dob } = req.body;
    const fields = [];
    const values = [];

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
    const results = await pool.query(query.updateStudentQuery(fields), values);

    if (results.rowCount === 0) {
      return res
        .status(404)
        .json({ message: `No student found with id: ${id}` });
    }

    res
      .status(200)
      .json({ message: `Successfully updated student with id: ${id}` });
  } catch (error) {
    // Handle any errors that occur during the async operations
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
  getStudents,
  getStudentById,
  getStudentsPagination,
  deleteAllStudents,
  deleteStudentById,
  updateStudent,
  logoutUser,
};
