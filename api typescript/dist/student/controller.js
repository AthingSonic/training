"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const jwtGenerator_1 = __importDefault(require("../utils/jwtGenerator"));
const queries = __importStar(require("./queries"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = __importDefault(require("../db"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, age, dob, password } = req.body;
    //  input validation
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
    // validate password length
    if (password.length < 6) {
        return res.status(400).json({
            message: "Password should be at least 6 characters long",
        });
    }
    try {
        // hash the password
        const salt = yield bcrypt_1.default.genSalt(10);
        const bcryptPassword = yield bcrypt_1.default.hash(password, salt);
        // check if email alrady exists
        const emailExists = yield db_1.default.query(queries.checkEmailExists, [email]);
        if (emailExists.rows.length > 0) {
            return res.status(400).json({
                message: "email already exists",
            });
        }
        // add new student
        yield db_1.default.query(queries.addStudent, [
            name,
            email,
            age,
            dob,
            bcryptPassword,
        ]);
        // retrieve the newly added student
        const result = yield db_1.default.query("SELECT * FROM students ORDER BY id DESC LIMIT 1");
        const newStudent = result ? result.rows[0] : {};
        // generae jwt token
        const jwtToken = (0, jwtGenerator_1.default)(newStudent.id);
        return res.cookie("token", jwtToken, { httpOnly: true }).status(201).json({
            message: "Successfully added student",
            newStudent,
            jwtToken,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
});
exports.register = register;
