import React from "react";
import styles from "./socialImg.module.scss";

const SocialImg = ({ children }) => {
  return <svg className={styles.Svg}  viewBox="0 0 47 36">
    <a className={styles.Link} href="#">
      {children}
    </a>
  </svg>
}

export default SocialImg;
