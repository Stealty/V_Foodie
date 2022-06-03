import React, { useReducer } from "react";
import Modal from "../modal/modal";
import SubmitButton from "../submitButton";
import styles from "./subscriptionCard.module.scss";

const initialState = {
  sending: false,
  message: "",
  showModal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SENDING":
      return { ...state, sending: true };
    case "SENT":
      return {
        ...state,
        sending: false,
        message: action.message,
        showModal: true,
      };
    case "CLOSE_MODAL":
      return { ...state, showModal: false };
    default:
      return state;
  }
};

const SubscriptionCard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando");
    const form = e.target;
    const data = new FormData(form);
    const dataObject = Object.fromEntries(data.entries());
    dispatch({ type: "SENDING" });
    //make mock post request
    const onSuccess = () => {
      console.table(dataObject);
      dispatch({ type: "SENT", message: "Message sent successfully!" });
      form.reset();
    };
    const onFailure = () => {
      dispatch({ type: "SENT", message: "Message failed to send!" });
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
          <SubmitButton
            sending={state.sending}
            className={styles.SubmitButton}
          />
        </div>
      </form>
      <Modal
        show={state.showModal}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
        message={state.message}
      />
    </div>
  );
};

export default SubscriptionCard;
