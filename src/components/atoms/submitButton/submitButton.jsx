import React from "react";
import styles from "./submitButton.module.scss";

const SubmitButton = ({
  sending,
  onClick,
  type = "submit",
  text = "Submit",
  icon,
}) => {
  return (
    <button
      type={type}
      className={!sending ? styles.submitButton : styles.submitButton__disabled}
      disabled={sending}
      onClick={onClick}
    >
      {text}
      {icon}
      {sending && "ting..."}
    </button>
  );
};

export default SubmitButton;
