import React, { useState } from "react";
import './menu.scss'
import MenuSlider from "./menuslider";
import MenuHamburguer from "./menuHamburguer";

const Menu = () => {
  const [toggle, setActive] = useState("false");
  const [classMenu, setClassMenu] = useState("");
  const Body = document.querySelector("body");

  const closeMenu = () => {
    setActive(!toggle);
    setClassMenu("Slider-Off");
    Body.classList.remove("disable-scroll");

    setTimeout(() => {
      setClassMenu("");
    }, 1200);
  };

  const OnClickHandler = (KeyEvent) => {
    console.log(KeyEvent.key);
    if(KeyEvent.key === "Enter" || KeyEvent.key === "Space" || KeyEvent.key == null){
    if (!toggle) {
      closeMenu();
      setClassMenu("Slider-Off");
      Body.classList.remove("disable-scroll");

      setTimeout(() => {
        setClassMenu("");
      }, 1200);
    } else {
      setActive(!toggle);
      setClassMenu("Slider-On");
      Body.classList.add("disable-scroll");
    }
  }
  }

  return <nav className="Navigation">
    <MenuHamburguer OnClickHandler = {OnClickHandler} class = {`Menu-Hamburguer ${toggle ? "" : "Rotation"}`}/>
    <MenuSlider class={`Menu ${classMenu}`} />
  </nav>
};

export default Menu;