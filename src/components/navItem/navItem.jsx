import React from "react";
import styles from "./navItem.module.scss";

//styles.navContainer

const NavItem = (props) => {
  const className =
    styles.navItem +
    " " +
    (props.classname ? styles["navItem" + props.classname] : "");
  return (
    <a
      href="#"
      className={className}
      tabIndex={props.nonFocusable ? "-1" : "0"}
    >
      {props.text}
    </a>
  );
};

export default NavItem;
