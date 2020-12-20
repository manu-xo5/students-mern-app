const jwt = require("jsonwebtoken");

const auther = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedUser;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ error: "Not Authorized, " + error.message });
  }
};

module.exports = auther;
