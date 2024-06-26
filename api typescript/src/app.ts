import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// custom import start
import studentRoutes from "./student/routes";
// custom import end

dotenv.config(); // using dotenv so we can use env files

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Home");
});

// students route
app.use("/api/v1/students", studentRoutes);

// Middleware to handle undefined routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Route not found");
});

export default app;
