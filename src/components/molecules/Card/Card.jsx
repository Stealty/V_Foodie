import TimeInfo from "@molecules/timeInfo/timeInfo";
import TypeInfo from "@molecules/typeInfo/typeInfo";
import styles from "./Card.module.scss";
import { useStore } from "@store/store";

export default function Card({ card, background, full }) {
  const [store, dispatch] = useStore();

  function handleLike(event) {
    dispatch("TOOGLE_HEART_RECIPES", card.id);
  }

  const classesNames = [styles["card"]];
  if (background) classesNames.push(styles["card--background"]);
  if (full) classesNames.push(styles["card--full"]);

  let heartImgClasses = "";
  if (!store.recipes.find((recipe) => recipe.id === card.id).isHeart)
    //if (!card.isHeart)
    heartImgClasses = styles["card__heart--notLiked"];

  return (
    <li className={classesNames.join(" ")}>
      <div className={styles["card__container"]}>
        <a
          className={styles["card__button"]}
          tabIndex="0"
          href=""
          target="__blank"
        >
          <img
            src={card.image}
            alt={"Ilustration of  " + card.title}
            className={styles["card__image"]}
          />
        </a>
        <button className={styles["card__heart"]} onClick={handleLike}>
          <img
            src="./images/card-heart.svg"
            className={heartImgClasses}
            alt={"Like button for " + card.title}
          />
        </button>
      </div>
      <div className={styles["card__info"]}>
        <a
          href=""
          target="_blank"
          className={styles["card__info__link"]}
          tabIndex="-1"
        >
          <h2 className={styles["card__info__title"]}>{card.title}</h2>
          <div className={styles["card__info__text"]}>
            <TimeInfo time={card.time} />
            <TypeInfo type={card.type} />
          </div>
        </a>
      </div>
    </li>
  );
}
