import React from "react";
import styles from "./siteBanner.module.scss";

const SiteBanner = () => {
  return (
    <div className={styles["siteBanner"]}>
      <img
        src="images/star.png"
        alt=""
        className={styles["siteBanner__imageEffect"]}
      />
      <p className={styles["siteBanner__message"]}>
        Don't forget to eat healthy food
      </p>
      <img
        src="images/salmon-salad.png"
        alt="salad with salmon on top"
        className={styles["siteBanner__image"]}
      />
      <p className={styles[`siteBanner__address`]}>www.foodieland.com</p>
    </div>
  );
};

export default SiteBanner;
