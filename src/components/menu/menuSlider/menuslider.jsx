import React from "react";
import NavContainer from "@/components/navContainer/navContainer";
import "./menuslider.scss";

const MenuSlider = (props) => {
  return (
    <nav className={props.class}>
      <NavContainer classname="Item" text="Home"></NavContainer>
      <NavContainer classname="Item" text="Recipes"></NavContainer>
      <NavContainer classname="Item" text="Blog"></NavContainer>
      <NavContainer classname="Item" text="About Us"></NavContainer>
      <NavContainer classname="Item" text="Contact"></NavContainer>
    </nav>
  );
};

export default MenuSlider;
