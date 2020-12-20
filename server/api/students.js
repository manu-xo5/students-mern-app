const Express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const fs = require("fs");

const Student = require("../model/student.js");
const auther = require("../middlewares/auther.js");

const router = Express.Router();

router.get("/", async (_, res) => {
  try {
    const students = await Student.find().select("-password -displayPic");
    res.json({ students });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/", async (req, res) => {
  try {
    req.body.dob = Date(req.body.dob);
    const newStudent = new Student(req.body);
    await newStudent.save();
    const token = jwt.sign(
      { _id: newStudent._id, role: "student" },
      process.env.JWT_SECRET
    );
    res.json({ student: newStudent, token });
  } catch ({ message }) {
    console.error(message);
    res.status(400).json({ error: message });
  }
});

router.post(
  "/display-pic",
  auther,
  multer().fields([{ name: "displayPic" }]),
  async (req, res) => {
    try {
      const student = await Student.findByIdAndUpdate(
        req.user._id,
        {
          displayPic: req.files.displayPic[0].buffer,
        },
        { new: true }
      );
      res.json({ student });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
);

router.delete("/", auther, async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.user._id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
