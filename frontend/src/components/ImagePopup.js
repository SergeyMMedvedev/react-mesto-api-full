import React, { useEffect, useCallback } from 'react';

function ImagePopup({
  card,
  isOpen,
  onClose,
}) {
  const handleEscClose = useCallback((evt) => {
    if (evt.key === 'Escape') {
      onClose(handleEscClose);
    }
  }, [onClose]);

  function overlayClose(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      onClose(handleEscClose);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
    }
  }, [isOpen, handleEscClose]);

  function handleClose(handleEscCloseFunc) {
    onClose(handleEscCloseFunc);
  }

  return (
    <div onClick={overlayClose} className={`popup popup_picture ${isOpen && 'popup_opened'}`}>
      <div className={`popup__picture-container ${isOpen && 'popup__window_opened'}`}>
        <img src={card && card.link} className='popup__image' alt='фото' />
        <h2 className='popup__image-title'>{card && card.name}</h2>
        <button className='popup__close' type='button' aria-label='Закрыть' onClick={handleClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
