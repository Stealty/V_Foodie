import React from "react";
import { NavItem } from "@/components";
import styles from "./menuslider.module.scss";

const MenuSlider = (props) => {
  const classMenu = props.menuState ? "menuSlider--on" : "menuSlider--off";
  return (
    <nav className={`${styles["menuSlider"]} ${styles[classMenu]}`}>
      <NavItem classname="--header" text="Home"></NavItem>
      <NavItem classname="--header" text="Recipes"></NavItem>
      <NavItem classname="--header" text="Blog"></NavItem>
      <NavItem classname="--header" text="About Us"></NavItem>
      <NavItem classname="--header" text="Contact"></NavItem>
    </nav>
  );
};

export default MenuSlider;
