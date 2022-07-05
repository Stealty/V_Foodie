import React from "react";
import styles from "./navItem.module.scss";
import { Link } from "react-router-dom";

//styles.navContainer

const NavItem = (props) => {
  const className =
    styles.navItem +
    " " +
    (props.classname ? styles["navItem" + props.classname] : "");
  return (
    <Link
      to={props.linkto}
      className={className}
      tabIndex={props.nonFocusable ? "-1" : "0"}
    >
      {props.text}
    </Link>
  );
};

export default NavItem;
