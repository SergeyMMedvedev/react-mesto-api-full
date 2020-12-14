import React, { useState, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({
  isSaving,
  onUpdateAvatar,
  isOpen,
  onClose,
}) {
  const avatarRef = useRef();
  const [isErrorActive, setIsErrorActive] = useState(false);
  const inputErrorClassName = `popup__input-error ${isErrorActive && 'popup__input-error_active'}`;

  function inputErrorActive() {
    setIsErrorActive(true);
  }

  function handleSubmit() {
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    setTimeout(() => {
      setIsErrorActive(false);
      avatarRef.current.value = '';
    }, 500);
  }

  function handleClose(handleEscClose) {
    setTimeout(() => {
      setIsErrorActive(false);
      avatarRef.current.value = '';
    }, 500);
    onClose(handleEscClose);
  }

  return (
    <PopupWithForm
      title='Обновить аватар'
      name='add-avatar'
      textButton={'Сохранить'}
      textButtonLoading={'Сохранение...'}
      isOpen={isOpen}
      isSaving={isSaving}
      isDisabled={avatarRef.current && Boolean(avatarRef.current.validationMessage)}
      onSubmit={handleSubmit}
      onClose={handleClose}
    >

    <input
      id='input-source'
      onChange={inputErrorActive}
      ref={avatarRef}
      type='url'
      className='popup__input'
      placeholder='Ссылка на аватар'
      name='link'
      required
    />
    <span id='input-source-error' className={inputErrorClassName}>{avatarRef.current && avatarRef.current.validationMessage}</span>

    </PopupWithForm>
  );
}

export default EditAvatarPopup;
