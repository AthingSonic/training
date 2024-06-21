const router = require("express").Router();
const authorize = require("../../middleware/authorize.js");
const controller = require("./controller.js");

router.post("/login", controller.login); //done test
router.post("/register", controller.register); //done test
router.post("/logout", controller.logoutUser);
router.get("/", authorize, controller.getStudents); //done test
router.get("/getStudentsPagination", authorize,controller.getStudentsPagination); //done test
router.get("/:id", authorize,controller.getStudentById); //done test
router.delete("/deleteAllStudents", authorize,controller.deleteAllStudents);
router.delete("/deleteStudentById/:id", authorize,controller.deleteStudentById); //done test
router.patch("/updateStudent/:id", authorize, controller.updateStudent); //done test

module.exports = router;
