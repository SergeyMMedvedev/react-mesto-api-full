import React, { useEffect, useCallback } from 'react';

function InfoTooltip({
  name,
  isOpen,
  onClose,
  isSuccessSignUp,
  infoTooltipText
}) {
  const infoTooltip = true;
  const handleEscClose = useCallback((evt) => {
    if (evt.key === 'Escape') {
      onClose(handleEscClose, infoTooltip, isSuccessSignUp);
    }
  }, [onClose, infoTooltip, isSuccessSignUp]);

  function overlayClose(evt) {
    if (
      evt.target.classList.contains('popup__close')
      || evt.target.classList.contains('popup_opened')
    ) {
      onClose(handleEscClose, infoTooltip, isSuccessSignUp);
    }
  }

  function handleButtonClose() {
    onClose(handleEscClose, infoTooltip, isSuccessSignUp);
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
    }
  }, [isOpen, handleEscClose]);

  return (
    <div onMouseDown={overlayClose} className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
      <div className={`popup__window popup__window_infoTooltip ${isOpen && 'popup__window_opened'}`}>
        {isSuccessSignUp
          ? (<div className='popup__logo-success'></div>)
          : (<div className='popup__logo-unsuccess'></div>)
        }
        <h2 className='popup__title popup__title_infoTooltip'>{infoTooltipText}</h2>
        <button onClick={handleButtonClose} className='popup__close popup__close_infoTooltip' type='button' aria-label='Закрыть' />
      </div>
    </div>
  );
}

export default InfoTooltip;
