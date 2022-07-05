import React from "react";
import styles from "./submitButton.module.scss";

const SubmitButton = (props) => {
  return (
    <button
      type={props.type}
      className={
        !props.sending ? styles.submitButton : styles.submitButton__disabled
      }
      disabled={props.sending}
    >
      {props.text}
      {props.icon}
      {props.sending && "ting..."}
    </button>
  );
};

export default SubmitButton;
