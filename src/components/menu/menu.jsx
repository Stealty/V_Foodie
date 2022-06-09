import React, { useState } from "react";
import styles from "./menu.module.scss";
import MenuSlider from "./menuSlider/menuslider";
import MenuHamburguer from "./menuHamburguer/menuHamburguer";

const Menu = () => {
  const [active, setActive] = useState("false");
  const [menuState, setMenuState] = useState(false);
  const Body = document.querySelector("body");

  const closeMenu = () => {
    setActive((currentActive) => !currentActive);
    setMenuState(false);
    Body.classList.remove("disable-scroll");
  };

  const OnClickHandler = (KeyEvent) => {
    if (
      KeyEvent.key === "Enter" ||
      KeyEvent.key === "Space" ||
      KeyEvent.key == null
    ) {
      if (!active) {
        closeMenu();
        setMenuState(false);
        Body.classList.remove("disable-scroll");
      } else {
        setActive((currentActive) => !currentActive);
        setMenuState(true);
        Body.classList.add("disable-scroll");
      }
    }
  };

  return (
    <nav className={styles["menu"]}>
      <MenuHamburguer OnClickHandler={OnClickHandler} rotate={menuState} />
      <MenuSlider menuState={menuState} />
    </nav>
  );
};

export default Menu;
