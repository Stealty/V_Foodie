import React from "react";
import styles from "./logo.module.scss";

const Logo = (props) => {
  return (
    <p className={`${styles["logo"]} ${props.className && props.className}`}>
      Foodieland<span className={styles["logo__dot"]}>.</span>
    </p>
  );
};

export default Logo;
