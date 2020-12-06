const Express = require("express");
const mongoose = require("mongoose");
const Student = require("../model/student.js");
const jwt = require("jsonwebtoken");

const router = Express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) throw Error("Invalide Login Credentials");

    const user = await Student.findOne({ name, password });
    if (!user) throw Error("Invalide Login Credentials");

    const token = jwt.sign(
      { _id: user._id, role: "student" },
      process.env.JWT_SECRET
    );
    res.json({ token });
  } catch ({ message }) {
    console.log(message);
    res.status(400).json({ error: message });
  }
});

module.exports = router;
