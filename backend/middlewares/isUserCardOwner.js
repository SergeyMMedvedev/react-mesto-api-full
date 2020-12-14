const MyError = require('../errors/myError');
const Card = require('../models/card');

module.exports = (req, res, next) => {
  if (!/^[0-9a-f]{24}$/.test(req.params.id)) {
    throw new MyError(400, 'Неверный id');
  }

  Card.findById(req.params.id).then((card) => {
    if (!card) {
      throw new MyError(404, 'Нет карточки с таким id');
    }

    if (req.user._id != card.owner._id) {
      // return res.status(404).send({ message: 'Вы не являетесь автором карточки' });
      throw new MyError(404, 'Вы не являетесь автором карточки');
    }

    return next();
  })
    .catch(next);
};
