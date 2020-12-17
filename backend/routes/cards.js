const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const isUserCardOwner = require('../middlewares/isUserCardOwner');
const urlValidator = require('../utils/validators');

const {
  getCards,
  postCards,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const auth = require('../middlewares/auth');

router.use(auth);

router.get('/cards', getCards);

router.post('/cards',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30).trim()
        .required(),
      link: Joi.string().custom(urlValidator).required(),
    }),
  }),
  postCards);

router.delete('/cards/:id', isUserCardOwner, deleteCard);

router.put('/cards/:cardId/likes',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().regex(/^[0-9a-f]{24}$/),
    }),
  }),
  likeCard);

router.delete('/cards/:cardId/likes',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().regex(/^[0-9a-f]{24}$/),
    }),
  }),
  dislikeCard);

module.exports = router;
