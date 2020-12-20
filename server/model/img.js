const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
  },
  displayPic: {
    type: Buffer,
    required: true,
  },
});

module.exports = mongoose.model("img", imgSchema);
