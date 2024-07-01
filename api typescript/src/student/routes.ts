import { Router } from "express";
import * as controller from "./controller";
import authorize from "../middleware/authorize";
import validate from "../middleware/validateRequests";
import createUserSchema from "../dto/loginSchema.schema";
import registerSchema from "../dto/registerSchema.shcema";
import multer, { Multer } from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// const upload:Multer = multer({dest: 'uploads/'})

const upload: Multer = multer({ storage });

let router = Router();
router.post("/uploadFile", upload.single("file"), controller.uploadFile);
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
