import React from "react";
import styles from "./submitButton.module.scss";

const SubmitButton = ({
  sending = false,
  type = "submit",
  text = "Submit",
}) => {
  return (
    <button
      type={type}
      className={!sending ? styles.submitButton : styles.submitButton__disabled}
      disabled={sending}
    >
      {text}
      {sending && "ting..."}
    </button>
  );
};

export default SubmitButton;
