import heart from "../images/heart.svg";
import deleteButton from "../images/delete_button.svg";

// Компонент карточки с изображением и информацией

export default function Card(props) {
  // Обработчик клика по карточке, вызывает переданный обработчик из props
  const handleCardClick = () => {
    props.onCardClick(props.card);
  };

  return (
    <>
      <article className="elements__card" key={props.card._id}>
        {/* Контейнер для изображения и кнопки удаления */}
        <div className="elements__image-container">
          {/* Кнопка удаления карточки */}
          <button
            type="button"
            className="elements__button elements__button_type_delete"
            aria-label="delete"
          >
            {/* Иконка мусорки */}
            <img
              src={deleteButton}
              alt="Серая иконка мусорки для кнопки удаления карточки"
              className="elements__button-icon elements__button-icon_type_delete"
            />
          </button>
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
            className="elements__button elements__button_type_heart"
            aria-label="heart"
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