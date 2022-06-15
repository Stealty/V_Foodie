import React from "react";
import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <p className={styles["logo"]}>
      Foodieland<span className={styles["logo__dot"]}>.</span>
    </p>
  );
};

export default Logo;
