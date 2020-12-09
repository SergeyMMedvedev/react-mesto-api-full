const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ users: 'Ошибка на сервере' });
    });
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(user);
    })
    .catch((err) => {
      console.error(err);
      if (err.name === 'CastError') return res.status(400).send({ message: 'неверный id' });
      return res.status(500).send({ message: 'Ошибка на сервере' });
    });
};

module.exports.postUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.error(err);
      if (err.name === 'ValidationError') return res.status(400).send({ message: err.message });
      return res.status(500).send({ message: 'Ошибка на сервере' });
    });
};

module.exports.patchUser = (req, res) => {
  const id = req.user._id;
  const { name, about } = req.body;
  User.findByIdAndUpdate(id,
    { name, about },
    {
      new: true,
      runValidators: true,
    })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.error(err);
      console.error('err.name: ', err.name);
      if (err.name === 'CastError') return res.status(400).send({ message: `неверные данные: ${err.message}` });
      if (err.name === 'ValidationError') return res.status(400).send({ message: err.message });
      return res.status(500).send({ message: 'Ошибка на сервере' });
    });
};

module.exports.patchUserAvatar = (req, res) => {
  const id = req.user._id;
  const { avatar } = req.body;
  User.findByIdAndUpdate(id,
    { avatar },
    {
      new: true,
      runValidators: true,
    })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.error(err);
      console.error('err.name: ', err.name);
      if (err.name === 'ValidationError') return res.status(400).send({ message: err.message });
      return res.status(500).send({ message: 'Ошибка на сервере' });
    });
};
