import React from "react";
import styles from "./menuHamburguer.module.scss";

const MenuHamburguer = (props) => {
  return (
    <ul
      role="button"
      tabIndex={0}
      onClick={props.OnClickHandler}
      onKeyDown={(KeyEvent) => props.OnClickHandler(KeyEvent)}
      className={`${styles["menuHamburguer"]}`}
    >
      <li
        className={`${
          props.rotate ? styles[`menuHamburguer__bar--topRotation`] : ""
        } ${styles[`menuHamburguer__bar`]}`}
      ></li>
      <li
        className={`${
          props.rotate ? styles[`menuHamburguer__bar--middleRotation`] : ""
        } ${styles[`menuHamburguer__bar`]}`}
      ></li>
      <li
        className={`${
          props.rotate ? styles[`menuHamburguer__bar--bottomRotation`] : ""
        } ${styles[`menuHamburguer__bar`]}`}
      ></li>
    </ul>
  );
};

export default MenuHamburguer;
