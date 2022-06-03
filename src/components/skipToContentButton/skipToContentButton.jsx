import React from "react";
import styles from "./skipToContentButton.module.scss";

function SkipToContentButton() {
  return (
    <a className={styles.skipToContentButton} href="#maincontent">
      Skip to main content
    </a>
  );
}

export default SkipToContentButton;
