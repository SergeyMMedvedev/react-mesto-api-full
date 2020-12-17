const isURL = require('validator/lib/isURL');
const { CelebrateError } = require('celebrate');

const urlValidator = (value) => {
  if (!isURL(value)) {
    throw new CelebrateError('Неверный url');
  }
  return value;
};

module.exports = urlValidator;
