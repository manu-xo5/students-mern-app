const mongoose = require("mongoose");
const Express = require("express");
const path = require("path");

// apis
const StudentsRoutes = require("./api/students");
const AuthRoutes = require("./api/auth");
const MeRoutes = require("./api/me");
const ImgRoutes = require("./api/img");

require("dotenv").config();

const app = Express();
const PORT = process.env.PORT || 5000;
const MONGORUI = process.env.MONGO_URI;

app.use(Express.json());
app.use("/static", Express.static(__dirname + "/static"));

app.use("/api/auth", AuthRoutes);
app.use("/api/me", MeRoutes);
app.use("/api/students", StudentsRoutes);
app.use("/api/img", ImgRoutes);
app.use("/", (_, res) => res.sendFile(path.join(__dirname, "index.html")));
app.use("*", (_, res) => res.redirect("/"));

async function main() {
  try {
    await mongoose.connect(MONGORUI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("mongoose connected");

    app.listen(PORT, () => console.log(`expressing listening ${PORT}`));
  } catch (error) {
    console.error(error.message);
  }
}
main();
