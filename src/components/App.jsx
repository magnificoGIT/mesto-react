import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

export default function App() {
  // Стейты для управления видимостью попапов и выбранной карточки
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Обработчики для открытия соответствующих попапов
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  // Закрытие всех попапов и сброс выбранной карточки
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  // Обработчик клика по карточке который открывает попап с увеличенным изображением
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="root">
      <Header />

      {/* Компонент Main, в котором отображаются профиль, карточки и кнопки открытия попапов */}
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      {/* Попап для обновления аватара */}
      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonName="update"
        buttonText="Сохранить"
      >
        <input
          type="url"
          name="avatar"
          className="popup__input popup__input_type_url-avatar"
          placeholder="Ссылка на изображение"
          required
        />

        <span id="avatar-error" className="popup__input-error"></span>
      </PopupWithForm>

      {/* Попап для редактирования профиля */}
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonName="save-edit"
        buttonText="Сохранить"
      >
        <input
          type="text"
          name="name"
          className="popup__input popup__input_type_name"
          minLength="2"
          maxLength="40"
          required
          placeholder="Имя пользователя"
        />

        <span id="name-error" className="popup__input-error"></span>

        <input
          type="text"
          name="about"
          className="popup__input popup__input_type_about-myself"
          minLength="2"
          maxLength="200"
          required
          placeholder="Информация о пользователе"
        />

        <span id="about-error" className="popup__input-error "></span>
      </PopupWithForm>

      {/* Попап для добавления новой карточки */}
      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
        />

        <span id="title-error" className="popup__input-error"></span>

        <input
          type="url"
          name="url"
          className="popup__input popup__input_type_url"
          placeholder="Ссылка на картинку"
          required
        />

        <span id="url-error" className="popup__input-error"></span>
      </PopupWithForm>

      {/* Попап с увеличенным изображением */}
      <ImagePopup name="img" card={selectedCard} onClose={closeAllPopups} />

      <Footer />
    </div>
  );
}