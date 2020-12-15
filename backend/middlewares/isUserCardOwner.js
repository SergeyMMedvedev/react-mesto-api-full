const BadRequesError = require('../errors/bad-request-error');
const NotFoundError = require('../errors/not-found-error');
const ForbiddenError = require('../errors/forbidden-error');
const Card = require('../models/card');

module.exports = (req, res, next) => {
  if (!/^[0-9a-f]{24}$/.test(req.params.id)) {
    throw new BadRequesError('Неверный id');
  }

  Card.findById(req.params.id).then((card) => {
    if (!card) {
      throw new NotFoundError('Нет карточки с таким id');
    }
    const userId = req.user._id.toString();
    const cardOwnerId = card.owner._id.toString();
    if (userId !== cardOwnerId) {
      throw new ForbiddenError('Вы не являетесь автором карточки');
    }

    return next();
  })
    .catch(next);
};
