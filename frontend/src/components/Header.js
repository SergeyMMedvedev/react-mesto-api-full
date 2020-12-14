import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import logo from '../images/logo.svg';

function Header({ loggedIn, email, onSignOut }) {
  const [isExtend, setIsExtend] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  function handleExtend() {
    setIsExtend(!isExtend);
  }

  function renderLogContainer() {
    return (
      <div className={cn('header__log-container',
        { 'header__log-container_mobile': isMobile },
        { 'header__log-container_mobile-active section section_wide': (isExtend && isMobile) })}>
        <p className='header__user-email'>{email}</p>
        <button onClick={onSignOut} className='header__signOut-button'>Выйти</button>
      </div>
    );
  }

  return (
    <header className='header'>
      {(isMobile && loggedIn) && renderLogContainer()}
      <div className='header__container section section_wide'>

        <img className='header__logo' src={logo} alt='Логотип Место Россия' />
        <Route path='/sign-up'>
          <Link to='/sign-in' className='header__link'>Войти</Link>
        </Route>
        <Route path='/sign-in'>
          <Link to='/sign-up' className='header__link'>Регистрация</Link>
        </Route>
        {loggedIn && (
          isMobile ? (
            <button onClick={handleExtend} className={cn('header__extend-button', { 'header__extend-button_active': isExtend })}>
            </button>) : renderLogContainer()
        )}
      </div>
    </header>
  );
}

export default Header;
