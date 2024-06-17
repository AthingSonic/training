const pool = require("../../db.js");
const jwtGenerator = require("../../utils/jwtGenerator.js");
const query = require("./queries.js");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const student = await pool.query(
      "SELECT * FROM students WHERE email = $1",
      [email]
    );

    if (student.rows.length === 0) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const validPassword = await bcrypt.compare(
      password,
      student.rows[0].password
    );

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }

    const jwtToken = jwtGenerator(student.rows[0].id);

    return res.cookie("token", jwtToken, { httpOnly: true }).status(200).json({
      message: 'successfully logged in',
      student: student.rows[0],
      jwtToken,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const register = async (req, res) => {
  const { name, email, age, dob, password } = req.body;

  if (!name || !email || !age || !dob) {
    return res.status(400).json({
      message: "Please fill all the required details",
      data: req.body,
    });
  }

  const salt = await bcrypt.genSalt(10);
  const bcryptPassword = await bcrypt.hash(password, salt);

  pool.query(query.checkEmailExists, [email], (error, results) => {
    if (error) {
      return res.status(500).json({
        error: error.message,
      });
    }

    if (results.rows.length) {
      return res.json({
        message: `email: ${email} already exists`,
      });
    }

    // add student
    pool.query(query.addStudent, [name, email, age, dob, bcryptPassword], (error, results) => {
      if (!error) {
        pool.query("SELECT * FROM students", (error, results) => {
          let newStudent = results.rows[results.rows.length - 1];
          const jwtToken = jwtGenerator(newStudent.id);
          
          return res.cookie("token", jwtToken, { httpOnly: true }).status(201).json({
            message: "Successfully added student",
            newStudent,
            jwtToken,
          });
        });
      } else {
        return res.status(500).json({
          error: error.message,
        });
      }
    });
  });
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

const getStudents = (req, res) => {
  pool.query(query.getStudents, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }

    if (results.rowCount === 0) {
      return res.status(200).json({
        message: "No data availbale",
      });
    } else {
      return res.status(200).json(results.rows);
    }
  });
};

const getStudentsPagination = (req, res)=>{

  const page = parseInt(req.body.page) || 1;
  const pageSize = parseInt(req.body.pageSize) || 5;
  const offset = (page - 1) * pageSize;

  pool.query(query.paginatedQuery, [pageSize, offset], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }

    if (results.rowCount === 0) {
      return res.status(200).json({
        message: "No data availbale",
      });
    } else {
      return res.status(200).json(results.rows);
    }
  });
}

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(query.getStudentById, [id], (error, results) => {
    if (error) {
      return res.status(500).json({
        error: error.message,
      });
    }

    if (results.rowCount === 0) {
      return res.status(404).json({
        message: `No user found with id: ${id}`,
      });
    } else {
      return res.status(200).json(results.rows);
    }
  });
};

const deleteStudentById = (req, res) => {
  let id = parseInt(req.params.id);
  pool.query(query.deleteStudentById, [id], (error, results) => {
    if (error) {
      return res.status(500).json({
        error: error.message,
      });
    }

    if (results.rowCount === 0) {
      return res.status(500).json({
        message: `No student found with id: ${id}`,
      });
    } else {
      res.status(200).json({
        message: `Successfully deleted student with id: ${id}`,
      });
    }
  });
};

const deleteAllStudents = (req, res) => {
  pool.query(query.deleteAllStudents, (error, results) => {
    if (error) {
      return res.status(500).json({
        error: error.message,
      });
    }

    if (results.rowCount === 0) {
      return res.json({
        message: "Empty table, no data to delete",
      });
    } else {
      return res.status(200).json({
        message: "successfully deleted all studets from the table",
      });
    }
  });
};

const updateStudent = (req, res) => {
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

  // const setClause = fields.map((field, index) => `${field} = $${index + 1}`).join(", ");
  // const sql = `UPDATE students SET ${setClause} WHERE id = $${fields.length + 1}`;

  values.push(id);

  pool.query(query.updateStudentQuery(fields), values, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }

    if (results.rowCount === 0) {
      return res
        .status(404)
        .json({ message: `No student found with id: ${id}` });
    }

    res
      .status(200)
      .json({ message: `Successfully updated student with id: ${id}` });
  });
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
  logoutUser
};
