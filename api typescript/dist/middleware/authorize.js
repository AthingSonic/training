"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authorize = (req, res, next) => {
    // get token from header
    // const token = req.header('token')
    const token = req.cookies.token;
    if (!token) {
        return res.status(403).json({
            message: "authorization denied, Login first"
        });
    }
    // verify token
    try {
        // it is going to give the user id (user:{id: user.id})
        const verify = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
        req.user = verify.user;
        next();
    }
    catch (error) {
        res.status(401).json({
            message: "token is not valid"
        });
    }
};
exports.default = authorize;
