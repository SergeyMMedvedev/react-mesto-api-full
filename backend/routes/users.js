const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const auth = require('../middlewares/auth');
const urlValidator = require('../utils/validators');

const {
  getUsers,
  getUser,
  getSelfInfo,
  createUser,
  patchUser,
  patchUserAvatar,
  login,
} = require('../controllers/users');

router.post('/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
    }),
  }),
  login);

router.post('/signup',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().custom(urlValidator),
    }),
  }),
  createUser);

router.use(auth);

router.get('/users', getUsers);

router.get('/users/me', getSelfInfo);

router.get('/users/:id',
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().regex(/^[0-9a-f]{24}$/).required(),
    }),
  }),
  getUser);

router.patch('/users/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30).trim()
        .required(),
      about: Joi.string().min(2).max(30).trim()
        .required(),
    }),
  }),
  patchUser);

router.patch('/users/me/avatar',
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().custom(urlValidator).required(),
    }),
  }),
  patchUserAvatar);

module.exports = router;
