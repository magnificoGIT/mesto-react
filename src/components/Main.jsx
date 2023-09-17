import { useState, useEffect } from "react";
import vectorPencil from "../images/Vector.svg";
import vectorAdd from "../images/add.svg";
import api from "../utils/api";
import Card from "./Card";

export default function Main(props) {
  // Стейты для хранения информации о пользователе и карточках
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  // Эффект, загружающий информацию о пользователе при монтировании компонента
  useEffect(() => {
    api
      .getsUserInfo()
      .then((userData) => {
        // Устанавливаем имя пользователя из ответа API
        setUserName(userData.name);
        // Устанавливаем описание пользователя из ответа API
        setUserDescription(userData.about);
        // Устанавливаем URL аватара пользователя из ответа API
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.error(`Ошибка при загрузке данных о пользователе: ${err}`);
      });
  }, []); // Пустой массив зависимостей для выполнение эффекта только при монтировании

  // Эффект, загружающий начальные карточки при монтировании компонента
  useEffect(() => {
    api
      .getsInitialCards()
      .then((dataCards) => {
        // Устанавливаем карточки из ответа API
        setCards(dataCards);
      })
      .catch((err) => {
        console.error(`Ошибка при загрузке карточек: ${err}`);
      });
  }, []); // Пустой массив зависимостей для выполнение эффекта только при монтировании

  return (
    <main className="content">
      {/* Секция с профилем пользователя */}
      <section className="profile">
        {/* Блок с аватаром пользователя */}
        <div className="profile__avatar-container">
          <img
            alt="Круглое изображение, в фокусе которого находится улыбающийся Жак-Ив Кусто в красной шапке"
            className="profile__avatar"
            src={userAvatar}
          />
          {/* Кнопка для редактирования аватара */}
          <button
            type="button"
            className="profile__button profile__button_type_edit profile__button_type_edit-avatar"
            aria-label="edit-avatar"
            onClick={props.onEditAvatar}
          >
            {/* Иконка карандаша */}
            <img
              src={vectorPencil}
              alt="Иконка кнопки в виде карандаша"
              className="profile__button-icon profile__button-icon_type_edit-avatar"
            />
          </button>
        </div>

        {/* Блок с информацией о пользователе */}
        <div className="profile__info">
          <div className="profile__container">
            {/* Имя пользователя */}
            <h1 className="profile__title">{userName}</h1>
            {/* Кнопка для редактирования профиля */}
            <button
              type="button"
              className="profile__button profile__button_type_edit profile__button_type_edit-info"
              aria-label="edit"
              onClick={props.onEditProfile}
            >
              {/* Иконка карандаша */}
              <img
                src={vectorPencil}
                alt="Иконка кнопки в виде карандаша"
                className="profile__button-icon profile__button-icon_type_edit"
              />
            </button>
          </div>
          {/* Описание пользователя */}
          <p className="profile__subtitle">{userDescription}</p>
        </div>

        {/* Кнопка для добавления новой карточки */}
        <button
          type="button"
          className="profile__button profile__button_type_add"
          onClick={props.onAddPlace}
        >
          {/* Иконка плюса */}
          <img
            src={vectorAdd}
            alt="Иконка кнопки в виде плюса"
            className="profile__button-icon profile__button-icon_type_add"
            aria-label="add"
          />
        </button>
      </section>

      {/* Секция с отображением карточек */}
      <section className="elements">
        {/* Массив карточек для их отображения */}
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick} // Передаем обработчик клика по карточке
          />
        ))}
      </section>
    </main>
  );
}