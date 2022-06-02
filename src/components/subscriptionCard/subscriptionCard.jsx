import React from "react";
import SubmitButton from "../submitButton";
import styles from "./subscriptionCard.module.scss";

const SubscriptionCard = () => {
  return (
    <div className={styles["card"]}>
      <h2 className={styles["card__title"]}>Card Title</h2>
      <p className={styles["card__description"]}>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim
      </p>
      <div className={styles["card__button"]}>
        <SubmitButton />
      </div>
    </div>
  );
};

export default SubscriptionCard;
