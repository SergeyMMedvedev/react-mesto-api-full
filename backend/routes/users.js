const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const auth = require('../middlewares/auth');

const {
  getUsers,
  getUser,
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
    }),
  }),
  createUser);

router.use(auth);

router.get('/users', getUsers);

router.get('/users/me', getUser);

router.patch('/users/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
    }),
  }),
  patchUser);

router.patch('/users/me/avatar',
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().uri(),
    }),
  }),
  patchUserAvatar);

module.exports = router;
