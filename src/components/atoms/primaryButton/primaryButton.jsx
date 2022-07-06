import React from "react";
import styles from "./primaryButton.module.scss";

const PrimaryButton = ({
  sending = false,
  onClick,
  type = "submit",
  text = "Submit",
  sendingText,
  icon,
}) => {
  return (
    <button
      type={type}
      className={
        !sending ? styles.primaryButton : styles.primaryButton__disabled
      }
      disabled={sending}
      onClick={onClick}
    >
      {!sending ? text : sendingText}
      {icon}
    </button>
  );
};

export default PrimaryButton;
