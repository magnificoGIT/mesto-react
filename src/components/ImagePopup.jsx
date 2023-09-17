import iconClose from "../images/popup__button-icon_close.svg";

// Компонент ImagePopup который отвечает за отображение увеличенного изображения при клике на карточку.
export default function ImagePopup(props) {
  return (
    <div
      className={`popup popup-${props.name} ${props.card && "popup_active"}`}
    >
      {/* Контейнер для внутреннего содержания попапа */}
      <div className="popup__container popup__container_type_image">
        {/* Кнопка для закрытия попапа */}
        <button
          type="button"
          className="popup__button popup__button_type_close"
          aria-label="close"
          onClick={props.onClose} // Обработчик клика по кнопке закрытия
        >
          {/* Иконка закрытия */}
          <img
            src={iconClose}
            alt="Иконка кнопки в виде крестика"
            className="popup__button-icon popup__button-icon_type_close"
          />
        </button>
        {/* Контейнер для изображения */}
        <figure className="popup__image-container">
          {/* Изображение */}
          <img
            src={props.card ? props.card.link : ""}
            alt={props.card ? props.card.name : ""}
            className="popup__image"
          />
          <figcaption>
            <h2 className="popup__image-subtitle"></h2>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}