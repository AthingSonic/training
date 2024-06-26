"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// custom import start
const routes_1 = __importDefault(require("./student/routes"));
// custom import end
dotenv_1.default.config(); // using dotenv so we can use env files
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.get("/", (req, res) => {
    res.send("Home");
});
// students route
app.use("/api/v1/students", routes_1.default);
// Middleware to handle undefined routes
app.use((req, res, next) => {
    res.status(404).send("Route not found");
});
exports.default = app;
