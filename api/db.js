const Pool = require("pg").Pool;

// DB_PASS = 'athing@123'
// DB_USER = 'postgres'
// DB_HOST = 'localhost'
// DB_DATABASE = 'students'
// DB_PORT = 5432
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

module.exports = pool;
