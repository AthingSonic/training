import { Pool, PoolConfig } from "pg";
import dotenv from "dotenv";

dotenv.config();

interface DBConfig extends PoolConfig {
  user: string;
  host: string;
  database: string;
  password: string;
  port: number;
}

const dbConfig: DBConfig = {
  user: process.env.DB_USER || "",
  host: process.env.DB_HOST || "",
  database: process.env.DB_DATABASE || "",
  password: process.env.DB_PASS ? String(process.env.DB_PASS) : "",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  // max: 20, // Maximum number of clients in the pool
  // idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
};

const pool: Pool = new Pool(dbConfig);

pool.on("error", (err: Error) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

export default pool;
