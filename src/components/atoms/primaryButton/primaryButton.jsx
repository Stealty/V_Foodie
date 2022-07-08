import React from "react";
import styles from "./primaryButton.module.scss";

const PrimaryButton = ({
  sending = false,
  onClick,
  type = "submit",
  text = "Submit",
  sendingText,
  icon,
  variant,
  className,
}) => {
  const classes = [styles["primaryButton"]];
  if (sending) classes.push(styles["primaryButton--disabled"]);
  if (variant) classes.push(styles[`primaryButton--${variant}`]);
  classes.push(className);
  return (
    <button
      type={type}
      className={classes.join(" ")}
      disabled={sending}
      onClick={onClick}
    >
      {!sending ? text : sendingText}
      {icon}
    </button>
  );
};

export default PrimaryButton;
