import styles from "./Card.module.scss";

export default function Card() {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["card-wrapper__image__container"]}>
        <img
          src="./images/fruit-salad.png"
          alt="Mixed Tropical Fruit Salad with Superfood Boosts"
          className={styles["card-wrapper__image__container__image"]}
        />
        <div className={styles["card-wrapper__image__container__heart"]}>
          <img
            src="./images/card-heart.svg"
            className={styles["card-wrapper__image__container__heart__svg"]}
          />
        </div>
      </div>

      <div className={styles["card-wrapper__info"]}>
        <h2 className={styles["card-wrapper__info__title"]}>
          Mixed Tropical Fruit Salad with Superfood Boosts
        </h2>
        <div className={styles["card-wrapper__info__text"]}>
          <p className={styles["card-wrapper__info__text_time"]}>30 Minutes</p>
          <p className={styles["card-wrapper__info__text_type"]}>🍴 Healthy</p>
        </div>
      </div>
    </div>
  );
}
