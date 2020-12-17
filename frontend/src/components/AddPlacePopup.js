import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { notOnlySpaceCheck } from '../utils/validators';

function AddPlacePopup({
  isSaving,
  onAddPlace,
  isOpen,
  onClose,
}) {
  const inputErrorClassName = `popup__input-error ${isOpen && 'popup__input-error_active'}`;
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(true);
  const [link, setLink] = useState('');
  const [linkError, setLinkError] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  function handleChangeTitle(e) {
    setTitle(e.target.value);
    setTitleError(e.target.validationMessage);
    notOnlySpaceCheck(e.target.validationMessage, e.target.value.trim().length, setTitleError);
    setIsDisabled(Boolean(e.target.validationMessage) || Boolean(linkError) || (e.target.value.trim().length < 2));
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
    setLinkError(e.target.validationMessage);
    setIsDisabled(Boolean(e.target.validationMessage) || Boolean(titleError));
  }

  function handleSubmit() {
    onAddPlace({
      name: title,
      link,
    });
    setTimeout(() => {
      setTitleError(true);
      setLinkError(true);
      setIsDisabled(true);
    }, 500);
  }

  function handleClose(handleEscClose) {
    setTimeout(() => {
      setTitle('');
      setTitleError(true);
      setLink('');
      setLinkError(true);
      setIsDisabled(true);
    }, 500);
    onClose(handleEscClose);
  }

  useEffect(() => {
    setTitle('');
    setLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      title='Новое место'
      name='add-form'
      textButton={'Сохранить'}
      textButtonLoading={'Сохранение...'}
      isOpen={isOpen}
      isSaving={isSaving}
      isDisabled={isDisabled}
      onSubmit={handleSubmit}
      onClose={handleClose}
    >

    <input
      id='input-photo-title'
      onChange={handleChangeTitle}
      value={title}
      type='text'
      className='popup__input'
      placeholder='Название'
      name='name'
      minLength='2'
      maxLength='30'
      required
    />
    <span id='input-photo-title-error' className={inputErrorClassName}>{titleError}</span>
    <input
      id='input-source-img'
      onChange={handleChangeLink}
      value={link}
      type='url'
      className='popup__input'
      placeholder='Ссылка на картинку'
      name='text'
      required
    />
    <span id='input-source-img-error' className={inputErrorClassName}>{linkError}</span>

    </PopupWithForm>
  );
}

export default AddPlacePopup;
