import jwt from 'jsonwebtoken'
import config from 'config'

 const auth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ msg: 'No Token, Authorization Denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is invalid' });
  }
};

export default auth