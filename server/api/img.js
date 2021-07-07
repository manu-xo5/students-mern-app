const router = require("express").Router();
const mongoose = require("mongoose");
const multer = require("multer");
const auther = require("../middlewares/auther");

const Img = require("../model/img");

router.get("/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;
    const img = await Img.findOne({ studentId });
    // Todo send placeholder img
    if (!img) return res.sendStatus(404);
    res.setHeader("content-type", "image/apng");
    res.send(new Buffer.from(img.displayPic.buffer));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.post(
  "/",
  auther,
  multer().fields([{ name: "displayPic" }]),
  async (req, res) => {
    try {
      if (
        !["image/png", "image/jpeg"].includes(req.files.displayPic[0].mimetype)
      )
        throw new Error("Use png or jpeg for display pic");

      const studentId = req.user._id;
      const displayPic = req.files.displayPic[0].buffer;
      const img = await Img.findOne({ studentId });

      if (img) {
        img.displayPic = displayPic;
        await img.save();
        res.status(200).json({ img });
      } else {
        const newImg = new Img({ studentId, displayPic });
        await newImg.save();
        res.status(200).json({ img });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
