const jwt = require('jsonwebtoken');
const MyError = require('../errors/myError');
const User = require('../models/user');
require('dotenv').config();

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new MyError(401, 'Необходима авторизация');
  } else if (authorization && !authorization.startsWith('Bearer ')) {
    throw new MyError(401, 'Необходима авторизация');
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token,
      NODE_ENV === 'production' ? JWT_SECRET : 'secret-key');
  } catch (err) {
    return res
      .status(401)
      .send({ message: 'Необходима авторизация' });
  }

  return User.findById(payload._id).then((user) => {
    if (!user) {
      return false;
    }
    req.user = payload;
    return next();
  });
};
