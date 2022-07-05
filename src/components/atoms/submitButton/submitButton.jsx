import React from "react";
import styles from "./submitButton.module.scss";

const SubmitButton = (props, { sending }) => {
  return (
    <button
      type={props.type}
      className={!sending ? styles.submitButton : styles.submitButton__disabled}
      disabled={sending}
    >
      {props.text}
      {props.icon}
      {sending && "ting..."}
    </button>
  );
};

export default SubmitButton;
