import React, { useState } from "react";
import "./menu.scss";
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
    //console.log(KeyEvent.key);
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

  const classMenu = menuState ? "menuSlider--on" : "menuSlider--off";
  return (
    <nav className="Navigation">
      <MenuHamburguer
        OnClickHandler={OnClickHandler}
        class={`Menu-Hamburguer ${active ? "" : "Rotation"}`}
      />
      <MenuSlider class={`menuSlider ${classMenu}`} />
    </nav>
  );
};

export default Menu;
