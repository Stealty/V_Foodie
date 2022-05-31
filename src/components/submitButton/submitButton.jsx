import React from "react";
import styles from "./submitButton.module.scss";

const SubmitButton = () => {
  return (
    <button type="submit" className={styles.submitButton}>
      Submit
    </button>
  );
};

export default SubmitButton;
