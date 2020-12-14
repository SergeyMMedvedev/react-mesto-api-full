import React, { useState } from 'react';

function Login({ onLogin }) {
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
    onLogin(email, password);
  }

  return (
    <div className='register'>
      <p className='register__header'>Вход</p>
      <form onSubmit={handleSubmit} className='register__form'>
        <input id='email' className='register__input' name='email' type='email' value={email} onChange={handleEmailChange} placeholder='Email' required />
        <input
          id='password'
          className='register__input'
          name='password'
          type='password'
          value={password}
          onChange={handlePasswordChange}
          placeholder='Пароль'
          minLength='8'
          maxLength='30'
          required />
        <button type='submit' className='register__submit-button'>Войти</button>
      </form>
    </div>
  );
}

export default Login;
