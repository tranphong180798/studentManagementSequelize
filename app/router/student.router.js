const express = require("express");
const { logFeature } = require("../middlewares/logger/log-feature");
const { checkEmpty } = require("../middlewares/validations/student.validations");
const studentRouter = express.Router();

const {
    getStudentList,
    getStudentDetailById,
    createStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/student.controllers")

studentRouter.get("/", logFeature, getStudentList);
studentRouter.get("/:id", getStudentDetailById);

studentRouter.post("/", checkEmpty, createStudent);
studentRouter.put("/:id", updateStudent);
studentRouter.delete("/:id", deleteStudent);

module.exports = studentRouter;