const mongoose = require("mongoose");

const dateValidator = value => {
  if (!value) return true;
  return Date.now() - 536479200000 - value < 0;
};

const phoneValidator = value => ["6", "9"].includes(String(value)[0]);

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: [24, "Name too long"],
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
    validate: [phoneValidator, "This phone number isn't value"],
  },
  dob: {
    type: Date,
    validate: [dateValidator, "You are under 17"],
  },
  college: {
    type: String,
  },
  address: { type: String },
  identity: {
    type: String,
    enum: ["AMERICAN", "ASIAN"],
    required: [true, "ASIAN or not simple"],
  },
  note: {
    type: String,
  },
});

module.exports = mongoose.model("student", studentSchema);
