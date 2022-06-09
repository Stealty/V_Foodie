import React from "react";
import { NavItem } from "@/components";
import "./menuslider.scss";

const MenuSlider = (props) => {
  return (
    <nav className={props.class}>
      <NavItem classname="--header" text="Home"></NavItem>
      <NavItem classname="--header" text="Recipes"></NavItem>
      <NavItem classname="--header" text="Blog"></NavItem>
      <NavItem classname="--header" text="About Us"></NavItem>
      <NavItem classname="--header" text="Contact"></NavItem>
    </nav>
  );
};

export default MenuSlider;
