const bcrypt = require('bcrypt');
const isStrongPassword = require('validator/lib/isStrongPassword');
const User = require('../models/user');
const MyError = require('../errors/myError');
const { getJwtToken } = require('../utils/jwt.js');

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((user) => {
      res.status(200).send(user);
    })
    .catch(next);
};

// module.exports.getUser = (req, res) => {
//   User.findById(req.params.id)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send({ message: 'Нет пользователя с таким id' });
//       }
//       return res.send(user);
//     })
//     .catch((err) => {
//       console.error(err);
//       if (err.name === 'CastError') return res.status(400).send({ message: 'неверный id' });
//       return res.status(500).send({ message: 'Ошибка на сервере' });
//     });
// };

module.exports.getUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        // return res.status(404).send({ message: 'Нет пользователя с таким id' });
        throw new MyError(404, 'Нет пользователя с таким id');
      }
      return res.status(200).send(user);
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
    // return res.status(400).send({ message: 'email и password должны быть заполнены' });
    throw new MyError(400, 'email и password должны быть заполнены');
  }
  //  else if (password) {
  //   if (!isStrongPassword(password)) {
  //     throw new MyError(400, 'пароль не достаточно надежный');
  //   }
  // }

  User.findOne({ email }).then((user) => {
    if (user) {
      throw new MyError(409, 'Пользователь с таким email уже существует');
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
          res.status(201).send({ message: `Пользователь name: ${newUser.name}, email: ${newUser.email} успешно создан` });
        })
        .catch(next);
    });
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

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new MyError(400, 'email и password должны быть заполнены');
  }

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = getJwtToken(user._id);
      res.status(200).send({ token });
    })
    .catch(next);
};
