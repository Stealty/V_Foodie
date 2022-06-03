import React from "react";
import styles from "./section.module.scss";

const Section = ({ arialabelledby, children, nomargin }) => {
  const className = nomargin
    ? styles["section"] + " " + styles["section--nomargin"]
    : styles["section"];
  return (
    <section aria-labelledby={arialabelledby} className={className}>
      {children}
    </section>
  );
};

export default Section;
