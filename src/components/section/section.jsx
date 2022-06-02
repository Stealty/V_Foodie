import React from "react";
import styles from "./section.module.scss";

const Section = ({ arialabelledby, children, nomargin }) => {
  const className = nomargin
    ? styles["section--nomargin"]
    : styles["section section--nomargin"];
  console.log(arialabelledby, nomargin);
  return (
    <section aria-labelledby={arialabelledby} className={styles.section}>
      {children}
    </section>
  );
};

export default Section;
