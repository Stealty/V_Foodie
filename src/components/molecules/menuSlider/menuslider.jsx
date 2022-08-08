import React, { useEffect, useState } from "react";
import { NavItem } from "@atoms";
import styles from "./menuslider.module.scss";

const MenuSlider = (props) => {
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth < 1024) {
        setIsScreenSmall(true);
      } else {
        setIsScreenSmall(false);
      }
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const classMenu = props.menuState ? "menuSlider--on" : "menuSlider--off";
  const nonFocusable = isScreenSmall && !props.menuState ? true : false;
  return (
    <nav className={`${styles["menuSlider"]} ${styles[classMenu]}`}>
      <NavItem
        OnClickHandler={isScreenSmall ? props.OnClickHandler : ""}
        classname="--header"
        linkto="/home"
        text="Home"
        nonFocusable={nonFocusable}
      ></NavItem>
      <NavItem
        OnClickHandler={isScreenSmall ? props.OnClickHandler : ""} 
        classname="--header"
        linkto="/mixed-tropical-fruit-salad-with-superfood-boosts"
        text="Recipes"
        nonFocusable={nonFocusable}
      ></NavItem>
      <NavItem
        OnClickHandler={isScreenSmall ? props.OnClickHandler : ""} 
        classname="--header"
        linkto="/blog"
        text="Blog"
        nonFocusable={nonFocusable}
      ></NavItem>
      <NavItem
        OnClickHandler={isScreenSmall ? props.OnClickHandler : ""} 
        classname="--header"
        linkto="/about-us"
        text="About Us"
        nonFocusable={nonFocusable}
      ></NavItem>
      <NavItem
        OnClickHandler={isScreenSmall ? props.OnClickHandler : ""} 
        classname="--header"
        linkto="/contact"
        text="Contact"
        nonFocusable={nonFocusable}
      ></NavItem>
    </nav>
  );
};

export default MenuSlider;
