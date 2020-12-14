import React, { useContext } from 'react';
import imageDefault from '../images/imageDefault.jpg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
  onEditProfile,
  onEditAvatar,
  onAddPlace,
  onDelPlace,
  onCardClick,
  onCardLike,
  isLoading,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <main className='section'>

        <section className='profile'>
          <div className='profile__avatar'>
            <img className='profile__avatar-img' src={currentUser.avatar ? currentUser.avatar : imageDefault} alt='фото профиля' />
            <div onClick={onEditAvatar} className='profile__avatar-edit' />
          </div>
          <div className='profile__info'>
            <div className='profile__name-edit'>
              <h1 className='profile__name'>{currentUser.name}</h1>
              <button onClick={onEditProfile} className='profile__edit-button' type='button' aria-label='Редактировать профиль' />
            </div>
            <p className='profile__profession'>{currentUser.about}</p>
          </div>
          <button onClick={onAddPlace} className='profile__add-button' type='button' aria-label='Добавить фотогафию' />
        </section>

        <div className={`spinner ${isLoading && 'spinner_visible'}`}><i className='spinner__inner' /><p className='spinner__text'>Загрузка...</p></div>

        <section className='card-list'>
          <ul className='card-list__elements'>
            {cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onLikeClick={onCardLike}
                onCardClick={onCardClick}
                onDelPlace={onDelPlace}
              />
            ))}
          </ul>
        </section>

      </main>
    </>
  );
}

export default Main;
