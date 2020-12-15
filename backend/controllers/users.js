const bcrypt = require('bcrypt');
const User = require('../models/user');
const BadRequesError = require('../errors/bad-request-error');
const ConflictError = require('../errors/conflict-error');
const NotFoundError = require('../errors/not-found-error');
const { getJwtToken } = require('../utils/jwt.js');

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequesError('email и password должны быть заполнены');
  }

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = getJwtToken(user._id);
      res.status(200).send({ token });
    })
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const {
    name,
    about,
    avatar,
    email,
    password,
  } = req.body;
  if (!email || !password) {
    throw new BadRequesError(400, 'email и password должны быть заполнены');
  }

  User.findOne({ email }).then((user) => {
    if (user) {
      throw new ConflictError('Пользователь с таким email уже существует');
    }
    bcrypt.hash(password, 10).then((hash) => {
      User.create({
        name,
        about,
        avatar,
        email,
        password: hash,
      })
        .then((newUser) => {
          res.status(201).send({ message: `Пользователь email: ${newUser.email} успешно создан` });
        })
        .catch(next);
    });
  })
    .catch(next);
};

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((user) => {
      res.status(200).send(user);
    })
    .catch(next);
};

module.exports.getUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет пользователя с таким id');
      }
      return res.status(200).send(user);
    })
    .catch(next);
};

module.exports.patchUser = (req, res, next) => {
  const id = req.user._id;
  const { name, about } = req.body;
  User.findByIdAndUpdate(id,
    { name, about },
    {
      new: true,
      runValidators: true,
    })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch(next);
};

module.exports.patchUserAvatar = (req, res, next) => {
  const id = req.user._id;
  const { avatar } = req.body;
  User.findByIdAndUpdate(id,
    { avatar },
    {
      new: true,
      runValidators: true,
    })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch(next);
};
