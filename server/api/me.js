const Express = require("express");
const mongoose = require("mongoose");
const Student = require("../model/student.js");
const auther = require("../middlewares/auther.js");

const router = Express.Router();

router.get("/", auther, async (req, res) => {
  try {
    const student = await Student.findById(req.user._id);
    res.json({ student });
  } catch ({ message }) {
    console.error(message);
    res.json({ error: message });
  }
});

router.put("/", auther, async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
    });
    res.json({ student });
  } catch ({ message }) {
    console.log(message);
    res.status(400).json({ error: message });
  }
});

module.exports = router;
