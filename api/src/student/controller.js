const pool = require("../../db.js");
const query = require("./queries.js");

const getStudents = (req, res) => {
  pool.query(query.getStudents, (error, results) => {
    // if (!error) {
    //   res.status(200).json(results.rows);
    // } else {
    //   res.status(500).json({ error: error.message });
    // }

    if(error){
      return res.status(500).json({ error: error.message });
    }

    if(results.rowCount === 0){
      return res.status(200).json({
        message: "No data availbale"
      });
    }else{
     return res.status(200).json(results.rows);
    }

  });
};

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

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  console.log(name);

  if(!name || !email || !age || !dob){
    return res.status(400).json({
      message: 'Please fill all the required details',
      data: req.body
    })
  }

  //   check if email exists
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
    pool.query(query.addStudent, [name, email, age, dob], (error, results) => {
      if (!error) {
        return res.status(201).json({
          message: "Successfully added student"
        });
      } else {
        return res.status(500).json({
          error: error.message,
        });
      }
    });
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

    if(results.rowCount === 0){
      return res.json({
        message: "Empty table, no data to delete"
      })
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
      return res.status(404).json({ message: `No student found with id: ${id}` });
    }

    res.status(200).json({ message: `Successfully updated student with id: ${id}` });
  });
};


module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  deleteAllStudents,
  deleteStudentById,
  updateStudent
};
