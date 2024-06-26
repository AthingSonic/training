import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
  user?: { id: number };
}

const authorize = (req: CustomRequest, res: Response, next: NextFunction) => {
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
    const verify = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as { user: { id: number } };
    req.user = verify.user;
    next();
  } catch (error) {
    res.status(401).json({
      message: "token is not valid"
    });
  }
};

export default authorize;

