import jwt from 'jsonwebtoken';

const auther = (req, res, next) => {
  try {
    const token = req.headers['authentication'];
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedUser);
    req.user = decodedUser;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ error: 'Not Authorized, ' + error.message });
  }
};

export default auther;