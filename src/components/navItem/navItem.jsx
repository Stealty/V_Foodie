import React from "react";
import styles from "./navItem.module.scss";

//styles.navContainer

const NavItem = (props) => {
  const className = styles.navItem + " " + styles["navItem" + props.classname];
  return (
    <a href="#" className={className}>
      {props.text}
    </a>
  );
};

export default NavItem;
