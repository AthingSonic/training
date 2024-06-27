import { Router } from "express";
import * as controller from "./controller";
import authorize from "../middleware/authorize";

let router = Router();

router.post('/login', controller.login)
router.post('/logout', controller.logoutUser)
router.post("/register", controller.register);
router.get("/", authorize,controller.getStudents);
router.get('/getStudentsPagination', authorize,controller.getStudentsPagination)
router.get('/:id', authorize,controller.getStudentById)
router.patch('/updateStudent/:id', authorize,controller.updateStudent)
router.delete('/deleteStudentById/:id', authorize, controller.deleteStudentById)
export default router;
