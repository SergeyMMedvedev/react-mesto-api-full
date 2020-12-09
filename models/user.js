const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        const regex = /^https?:\/\/[a-z\-._~:/?#[\]@!$&'()*+,;=%\d]+$/i;
        return regex.test(v);
      },
      message: (props) => `${props.value} не валидная ссылка!`,
    },
  },
});

module.exports = mongoose.model('user', userSchema);
