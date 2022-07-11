import { useState } from "react";
import TimeInfo from "@molecules/timeInfo/timeInfo";
import TypeInfo from "@molecules/typeInfo/typeInfo";
import styles from "./Card.module.scss";

export default function Card({card, ...props}) {
  const [like, setLike] = useState(false);
  function handleLike(event) {
    let heartIcon = event.currentTarget.firstChild.classList.toggle(
      styles["card__heart--notLiked"]
    );
    setLike(like);
    return heartIcon;
  }

  return (
    <li className={!props.background ? styles["card"] : `${styles["card"]} ${styles["Background"]}`}>
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
            className={styles["card__heart--notLiked"]}
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
