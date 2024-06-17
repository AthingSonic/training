const router = require("express").Router();
const authorize = require("../../middleware/authorize.js");
const controller = require("./controller.js");

router.post("/login", controller.login);
router.post("/register", controller.register);
router.post("/logout", controller.logoutUser);
router.get("/", authorize, controller.getStudents);
router.get("/getStudentsPagination", authorize, controller.getStudentsPagination);
router.get("/:id",authorize ,controller.getStudentById);
router.delete("/deleteAllStudents", authorize, controller.deleteAllStudents);
router.delete("/deleteStudentById/:id", authorize, controller.deleteStudentById);
router.patch("/updateStudent/:id", authorize, controller.updateStudent)

module.exports = router;
