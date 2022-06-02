import React from "react";
import SubmitButton from "../submitButton";
import styles from "./subscriptionCard.module.scss";

const SubscriptionCard = () => {
  return (
    <div className={styles["card"]}>
      <h2 className={styles["card__title"]}>Deliciousness to your inbox</h2>
      <p className={styles["card__description"]}>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim
      </p>
      <form className={styles["form"]}>
        <input
          className={styles["form__input"]}
          type="text"
          placeholder="Your email address..."
        />
        <div className={styles["form__button"]}>
          <SubmitButton />
        </div>
      </form>
      <img
        className={
          styles["card__backgroundImage"] +
          " " +
          styles["card__backgroundImage--left"]
        }
        src="images/forks-and-salad.png"
        alt=""
        loading="lazy"
      />
      <img
        className={
          styles["card__backgroundImage"] +
          " " +
          styles["card__backgroundImage--float"]
        }
        src="images/rucula.png"
        alt=""
        loading="lazy"
      />
      <img
        className={
          styles["card__backgroundImage"] +
          " " +
          styles["card__backgroundImage--right"]
        }
        src="images/avocado-salad.png"
        alt=""
        loading="lazy"
      />
    </div>
  );
};

export default SubscriptionCard;
