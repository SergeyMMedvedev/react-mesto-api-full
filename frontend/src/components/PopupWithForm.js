import React, { useEffect, useCallback } from 'react';

function PopupWithForm({
  children,
  title,
  name,
  textButton,
  textButtonLoading,
  isOpen,
  isSaving,
  onSubmit,
  onClose,
  isDisabled,
}) {
  const currentTextButton = isSaving ? textButtonLoading : textButton;
  const classNameButton = `popup__submit ${isDisabled && 'popup__submit_inactive'}`;
  const handleEscClose = useCallback((evt) => {
    if (evt.key === 'Escape') {
      onClose(handleEscClose);
    }
  }, [onClose]);

  function overlayClose(evt) {
    if (
      evt.target.classList.contains('popup__close')
      || evt.target.classList.contains('popup_opened')
    ) {
      onClose(handleEscClose);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    document.removeEventListener('keydown', handleEscClose);
    onSubmit();
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
    }
  }, [isOpen, handleEscClose]);

  return (
    <div onMouseDown={overlayClose} className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
      <div className={`popup__window ${isOpen && 'popup__window_opened'}`}>
        <h2 className='popup__title'>{title}</h2>
        <form id={name} onSubmit={handleSubmit} className='popup__form' name={name} noValidate>
          {children}
          <input type='submit' className={classNameButton} value={currentTextButton} disabled={isDisabled}/>
        </form>
        <button onClick={onClose} className='popup__close' type='button' aria-label='Закрыть' />
      </div>
    </div>
  );
}

export default PopupWithForm;
