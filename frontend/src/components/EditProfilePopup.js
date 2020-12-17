import React, { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { notOnlySpaceCheck } from '../utils/validators';

function EditProfilePopup({
  isSaving,
  onUpdateUser,
  isOpen,
  onClose,
}) {

  const inputErrorClassName = `popup__input-error ${isOpen && 'popup__input-error_active'}`;
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [nameError, setNameError] = useState();
  const [description, setDescription] = useState(currentUser.about);
  const [descriptionError, setdescriptionError] = useState();
  const [isDisabled, setIsDisabled] = useState(false);

  function handleChangeName(e) {
    setName(e.target.value);
    setNameError(e.target.validationMessage);
    notOnlySpaceCheck(e.target.validationMessage, e.target.value.trim().length, setNameError);
    setIsDisabled(Boolean(e.target.validationMessage) || Boolean(descriptionError) || (e.target.value.trim().length < 2));
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
    setdescriptionError(e.target.validationMessage);
    notOnlySpaceCheck(e.target.validationMessage, e.target.value.trim().length, setdescriptionError);
    setIsDisabled(Boolean(e.target.validationMessage) || Boolean(nameError) || (e.target.value.trim().length < 2));
  }

  function handleSubmit() {
    onUpdateUser({
      name,
      about: description,
    });
  }

  function handleClose(handleEscClose) {
    setTimeout(() => {
      setName(currentUser.name);
      setNameError();
      setDescription(currentUser.about);
      setdescriptionError();
      setIsDisabled(false);
    }, 500);
    onClose(handleEscClose);
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='profile-form'
      textButton={'Сохранить'}
      textButtonLoading={'Сохранение...'}
      isOpen={isOpen}
      isSaving={isSaving}
      isDisabled={isDisabled}
      onSubmit={handleSubmit}
      onClose={handleClose}
    >

    <input
      id='input-name'
      onChange={handleChangeName}
      value={name}
      type='text'
      className='popup__input'
      placeholder='Имя'
      name='name'
      required
      minLength='2'
      maxLength='40'
    />
    <span id='input-name-error' className={inputErrorClassName}>{nameError}</span>
    <input
      id='input-activity'
      onChange={handleChangeDescription}
      value={description}
      type='text'
      className='popup__input'
      placeholder='Профессия'
      name='text'
      required minLength='2'
      maxLength='200'
    />
    <span id='input-activity-error' className={inputErrorClassName}>{descriptionError}</span>

    </PopupWithForm>
  );
}

export default EditProfilePopup;
