import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

export default function EditAvatarPopup(props) {
  const avatarInputRef = useRef();

  const handleEditAvatarSubmit = (evt) => {
    evt.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  };

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonName="update"
      buttonText="Сохранить"
      onSubmit={handleEditAvatarSubmit}
    >
      <input
        type="url"
        name="avatar"
        className="popup__input popup__input_type_url-avatar"
        placeholder="Ссылка на изображение"
        required
        ref={avatarInputRef}
      />

      <span id="avatar-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}
