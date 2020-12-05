import Express from 'express';
import mongoose from 'mongoose';
import Student from '../model/student.js';

const router = Express.Router();

router.get('/', async (_, res) => {
  try {
    const students = await Student.find();
    res.json({ students });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.json({ student: newStudent });
  } catch ({ message }) {
    console.error(message);
    res.status(400).json({ error: message });
  }
});

export default router;
