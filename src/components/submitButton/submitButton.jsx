import React from "react";
import styles from "./submitButton.module.scss";

const SubmitButton = ({ sending }) => {
  return (
    <button
      type="submit"
      className={!sending ? styles.submitButton : styles.submitButton__disabled}
      disabled={sending}
    >
      Submit{sending && "ting..."}
    </button>
  );
};

export default SubmitButton;
