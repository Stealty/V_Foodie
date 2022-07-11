import React from "react";
import styles from "./Description.module.scss"

const Description = ({children}) => {
    return <p className={styles["Description"]}>
        {children}
  </p>
}

export default Description;