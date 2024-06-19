const express = require("express");
require("dotenv").config(); //using dotenv so we can use env files
const cookieParser = require("cookie-parser");

// custom import start
const studentRoutes = require("./src/student/routes.js");
// custom import end

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Home");
});
// students route
app.use("/api/v1/students", studentRoutes);
// Middleware to handle undefined routes
app.use((req, res, next) => {
  res.status(404).send("Route not found");
});

module.exports = app