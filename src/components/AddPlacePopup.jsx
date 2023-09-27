import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

export default function AddPlacePopup(props) {
  const cardNameRef = useRef();
  const cardLinkRef = useRef();

  const handleAddPlaceSubmit = (evt) => {
    evt.preventDefault();

    props.onAddPlace({
      name: cardNameRef.current.value,
      link: cardLinkRef.current.value,
    });
  };

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleAddPlaceSubmit}
      buttonName="create"
      buttonText="Создать"
    >
      <input
        type="text"
        name="title"
        className="popup__input popup__input_type_title"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        ref={cardNameRef}
      />

      <span id="title-error" className="popup__input-error"></span>

      <input
        type="url"
        name="url"
        className="popup__input popup__input_type_url"
        placeholder="Ссылка на картинку"
        required
        ref={cardLinkRef}
      />

      <span id="url-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}
