"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtGenerator = (userId) => {
    const payload = {
        user: {
            id: userId,
        },
    };
    const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    return token;
};
exports.default = jwtGenerator;
