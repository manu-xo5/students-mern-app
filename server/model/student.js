import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  college: {
    type: String,
  },
  address: { type: String },
  identity: {
    type: String,
    enum: ["AMERICAN", "ASIAN"],
    required: true,
  },
  note: {
    type: String,
  },
});

export default mongoose.model('student', studentSchema);
