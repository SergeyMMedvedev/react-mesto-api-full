const MyError = require('../errors/myError');
const Card = require('../models/card');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => {
      res.send(cards.reverse());
    })
    .catch(next);
};

module.exports.postCards = (req, res, next) => {
  const { name, link, owner = req.user._id } = req.body;
  Card.create({ name, link, owner })
    .then((card) => {
      res.send(card);
    })
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  console.log('deleteCard');
  const { id } = req.params;
  Card.findByIdAndRemove(id)
    .then((card) => {
      if (!card) {
        throw new MyError(404, 'Нет карточки с таким id');
      }
      return res.status(200).send(card);
    })
    .catch(next);
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new MyError(404, 'Нет карточки с таким id');
      }
      return res.send(card);
    })
    .catch(next);
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new MyError(404, 'Нет карточки с таким id');
      }
      return res.send(card);
    })
    .catch(next);
};
