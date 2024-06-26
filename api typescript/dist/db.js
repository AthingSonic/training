"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: Number(process.env.DB_PORT), // Ensure port is converted to a number
    //   max: 20, // Maximum number of clients in the pool
    //   idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
});
pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
});
exports.default = pool;
