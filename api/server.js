const express = require("express");
require("dotenv").config(); //using dotenv so we can use env files
const cookieParser = require("cookie-parser");

// custom import start
const studentRoutes = require("./src/student/routes.js");
// custom import end

const app = express();
const port = 3000;
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Home");
});

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
