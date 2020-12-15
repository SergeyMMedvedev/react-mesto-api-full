import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({
  card,
  onLikeClick,
  onCardClick,
  onDelPlace,
}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__del-button ${!isOwn && 'card__del-button_hidden'}`
  );
  const isLiked = card.likes.some((i) => i === currentUser._id);
  const cardLikeButtonClassName = `card__like ${isLiked && 'card__like_pressed'}`;

  function handleClick() {
    onCardClick(card);
  }

  function handleDelete() {
    onDelPlace(card);
  }

  function handleLike() {
    onLikeClick(card);
  }

  return (
    <li className='card'>
      <div className='card__picture-container'>
        <img src={card.link} className='card__picture' alt={card.name} onClick={handleClick}/>
      </div>
      <div className='card__info'>
        <p className='card__title'>{card.name}</p>
        <div className='card__likes'>
          <button className={cardLikeButtonClassName} onClick={handleLike} type='button' aria-label='Поставить лайк' />
          <div className='card__likes-count'>{card.likes.length}</div>
        </div>
      </div>
      <button className={cardDeleteButtonClassName} onClick={handleDelete} />
    </li>
  );
}

export default Card;
