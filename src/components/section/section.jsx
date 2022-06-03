import React from "react";
import styles from "./section.module.scss";

const Section = ({ arialabel, children, nomargin }) => {
  const className = nomargin
    ? styles["section"] + " " + styles["section--nomargin"]
    : styles["section"];
  return (
    <section aria-label={arialabel} className={className}>
      {children}
    </section>
  );
};

export default Section;
