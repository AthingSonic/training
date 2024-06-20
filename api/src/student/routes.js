const router = require("express").Router();
// const authorize = require("../../middleware/authorize.js");
const controller = require("./controller.js");

router.post("/login", controller.login); //done test
router.post("/register", controller.register); //done test
router.post("/logout", controller.logoutUser);
router.get("/", controller.getStudents); //done test
router.get("/getStudentsPagination", controller.getStudentsPagination); //done test
router.get("/:id", controller.getStudentById);
router.delete("/deleteAllStudents", controller.deleteAllStudents);
router.delete("/deleteStudentById/:id", controller.deleteStudentById);
router.patch("/updateStudent/:id", controller.updateStudent);

module.exports = router;
