import React, { useEffect } from "react";
import styles from "./submitButton.module.scss";

const SubmitButton = ({ sending }) => {
  useEffect(() => {
    console.log(sending);
  }, [sending]);
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
