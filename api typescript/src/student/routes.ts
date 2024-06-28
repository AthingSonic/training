import { Router } from "express";
import * as controller from "./controller";
import authorize from "../middleware/authorize";
import validate from "../middleware/validateRequests";
import createUserSchema from "../dto/loginSchema.schema";
import registerSchema from "../dto/registerSchema.shcema";

let router = Router();

router.post("/login", validate(createUserSchema), controller.login);
router.post("/logout", controller.logoutUser);
router.post("/register", validate(registerSchema), controller.register);
router.get("/", authorize, controller.getStudents);
router.get(
  "/getStudentsPagination",
  authorize,
  controller.getStudentsPagination
);
router.get("/:id", authorize, controller.getStudentById);
router.patch("/updateStudent/:id", authorize, controller.updateStudent);
router.delete(
  "/deleteStudentById/:id",
  authorize,
  controller.deleteStudentById
);
export default router;
