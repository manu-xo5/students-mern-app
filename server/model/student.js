import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: [24, 'Name too fuuKing long'],
  },
  password: {
    type: String,
    required: true,
    min: [8, "It should atleast be 8 unit long. unit = 'in' || 'ch'"],
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    min: [1000000000, 'Fool'],
    max: [9999999999, 'Typo in phone number'],
  },
  dob: {
    type: String,
    required: [true, 'Fk privacy. DOB IS REQUIRED'],
  },
  college: {
    type: String,
  },
  address: { type: String },
  identity: {
    type: String,
    enum: ['AMERICAN', 'ASIAN'],
    required: [true, 'ASIAN or not simple'],
  },
  note: {
    type: String,
  },
});

export default mongoose.model('student', studentSchema);
