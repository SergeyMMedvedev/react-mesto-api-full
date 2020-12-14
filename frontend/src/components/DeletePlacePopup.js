import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeletePlacePopup({
  isSaving,
  onDeletePlace,
  isOpen,
  card,
  onClose,
}) {
  function handleSubmit() {
    onDeletePlace(card);
  }

  return (
    <PopupWithForm
      title='Вы уверены?'
      name='del-form'
      textButton={'Удалить'}
      textButtonLoading={'Удаление...'}
      isOpen={isOpen}
      isSaving={isSaving}
      onSubmit={handleSubmit}
      onClose={onClose}
    />
  );
}

export default DeletePlacePopup;
