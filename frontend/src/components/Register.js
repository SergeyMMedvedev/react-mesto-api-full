import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(email, password, () => {
      setEmail('')
      setPassword('')
    });
  }

  return (
    <div className='register'>
      <p className='register__header'>Регистрация</p>
      <form onSubmit={handleSubmit} className='register__form'>
        <input
          id='email'
          className='register__input'
          name='email'
          type='email'
          value={email}
          onChange={handleEmailChange}
          placeholder='Email'
          required
          minLength='2'
          maxLength='30'
        />
        <input
          id='password'
          className='register__input'
          name='password'
          type='password'
          value={password}
          onChange={handlePasswordChange}
          placeholder='Пароль'
          required
          minLength='8'
          maxLength='30'
        />
        <button type='submit' className='register__submit-button'>Зарегистрироваться</button>
      </form>
      <p className='register__login-text'>Уже зарегистрированы?
        <Link to='/sign-in' className='register__login-link'> Войти</Link>
      </p>
    </div>
  );
}

export default Register;
