import heart from "../images/heart.svg";
import deleteButton from "../images/delete_button.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

// Компонент карточки с изображением и информацией

export default function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  // Обработчик клика по карточке, вызывает переданный обработчик из props
  const handleCardClick = () => {
    props.onCardClick(props.card);
  };

  const handleCardLike = () => {
    props.onCardLike(props.card);
  };

  const handleCardDelete = () => {
    props.onCardDelete(props.card);
  };

  return (
    <>
      <article className="elements__card" key={props.card._id}>
        {/* Контейнер для изображения и кнопки удаления */}
        <div className="elements__image-container">
          {/* Кнопка удаления карточки */}
          {isOwn && (
            <button
              type="button"
              className="elements__button elements__button_type_delete"
              aria-label="delete"
              onClick={handleCardDelete}
            >
              {/* Иконка мусорки */}
              <img
                src={deleteButton}
                alt="Серая иконка мусорки для кнопки удаления карточки"
                className="elements__button-icon elements__button-icon_type_delete"
              />
            </button>
          )}
          {/* Кнопка для открытия изображения в большем размере */}
          <button
            className="elements__button elements__button_type_image"
            type="button"
            aria-label="image"
            onClick={handleCardClick}
          >
            {/* Изображение карточки */}
            <img
              src={props.card.link}
              alt={props.card.name}
              className="elements__image"
            />
          </button>
        </div>
        {/* Контейнер с названием карточки */}
        <div className="elements__container">
          {/* Название карточки */}
          <h2 className="elements__title">{props.card.name}</h2>
          {/* Кнопка "лайка" */}
          <button
            type="button"
            className={`elements__button elements__button_type_heart ${
              isLiked && "elements__button_type_heart-active"
            }`}
            aria-label="heart"
            onClick={handleCardLike}
          >
            {/* Иконка сердца */}
            <img
              src={heart}
              alt="Иконка кнопки в виде сердца"
              className="elements__button-icon elements__button-icon_type_heart"
            />
            {/* Счетчик лайков */}
            <span className="elements__likes-count">
              {props.card.likes.length}
            </span>
          </button>
        </div>
      </article>
    </>
  );
}
