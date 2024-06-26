import { Router } from "express";
import * as controller from "./controller";

let router = Router();

router.post("/register", controller.register);
router.get("/", controller.getStudents);

export default router;
