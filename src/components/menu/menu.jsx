import React, { useState } from "react";
import "./menu.scss";
import MenuSlider from "./menuSlider/menuslider";
import MenuHamburguer from "./menuHamburguer/menuHamburguer";

const Menu = () => {
  const [active, setActive] = useState("false");
  const [classMenu, setClassMenu] = useState("Slider-Off");
  const Body = document.querySelector("body");

  const closeMenu = () => {
    setActive((currentActive) => !currentActive);
    setClassMenu("Slider-Off");
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
        setClassMenu("Slider-Off");
        Body.classList.remove("disable-scroll");
      } else {
        setActive((currentActive) => !currentActive);
        setClassMenu("Slider-On");
        Body.classList.add("disable-scroll");
      }
    }
  };

  return (
    <nav className="Navigation">
      <MenuHamburguer
        OnClickHandler={OnClickHandler}
        class={`Menu-Hamburguer ${active ? "" : "Rotation"}`}
      />
      <MenuSlider class={`Menu ${classMenu}`} />
    </nav>
  );
};

export default Menu;
