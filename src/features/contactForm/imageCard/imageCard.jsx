import React from "react";
import styles from "./imageCard.module.scss";

const ImageCard = () => {
  return (
    <div className={styles["imageCard"]}>
      <div className={styles["imageCard_backdrop"]}></div>
      <img
        className={styles["imageCard_image"]}
        src="images\chefSmiling.png"
        alt="chef smiling"
        loading="lazy"
      />
    </div>
  );
};

export default ImageCard;
