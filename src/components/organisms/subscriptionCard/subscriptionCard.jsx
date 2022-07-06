import React from "react";
import { useModal } from "@hooks/useModal";
import { PrimaryButton } from "@atoms";
import { Modal } from "@molecules";
import styles from "./subscriptionCard.module.scss";

const SubscriptionCard = () => {
  const {
    message,
    sending,
    showModal,
    setSendingTransition,
    openModal,
    closeModal,
  } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando");
    const form = e.target;
    const data = new FormData(form);
    const dataObject = Object.fromEntries(data.entries());
    setSendingTransition();
    //make mock post request
    const onSuccess = () => {
      console.table(dataObject);
      openModal(`Email ${dataObject.email} subscribed!`);
      form.reset();
    };
    const onFailure = () => {
      openModal("Failed to subscribe email");
    };
    setTimeout(() => onSuccess(), 2000);
  };

  return (
    <div className={styles["card"]}>
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
      />
      <h2 className={styles["card__title"]}>Deliciousness to your inbox</h2>
      <p className={styles["card__description"]}>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim
      </p>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <input
          className={styles["form__input"]}
          type="email"
          placeholder="Your email address..."
          name="email"
          required
        />
        <div className={styles["form__button"]}>
          <PrimaryButton
            sending={sending}
            className={styles.PrimaryButton}
            text="Subscribe"
            sendingText="Subscribing"
            type="submit"
          />
        </div>
      </form>
      <Modal show={showModal} onClose={closeModal} message={message} />
    </div>
  );
};

export default SubscriptionCard;
