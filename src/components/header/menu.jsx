import React, {useState} from "react";
import './menu.scss'
import NavContainer from '../footer/navContainer'

const Menu = () => {
    const [toggle, setActive] = useState("false");
    const [classMenu, setClassMenu] = useState("");
    const Body = document.querySelector("body");

    const closeMenu = () => {
        setActive(!toggle);
        setClassMenu("Slider-Off");
    
        setTimeout(() => {
          setClassMenu("");
        }, 1200);
      };
      
      const OnClickHandler = () => {
        if (!toggle) {
          closeMenu();
          setClassMenu("Slider-Off");
          Body.classList.toggle("disable-scroll")
    
          setTimeout(() => {
            setClassMenu("");
          }, 1200);
        } else {
          setActive(!toggle);
          setClassMenu("Slider-On");
        }
      }
    
    return <nav className="Navigation">
        <ul onClick = {OnClickHandler} className={`Menu-Hamburguer ${toggle ? "" : "Rotation"}`}>
            <li className={`Menu-Top`}></li>
            <li className={`Menu-Middle`}></li>
            <li className={"Menu-Bottom"}></li>
        </ul>
        <nav className={`Menu ${classMenu}`}>
            <NavContainer classname = "Item" text="Home"></NavContainer>
            <NavContainer classname = "Item" text="Recipes"></NavContainer>
            <NavContainer classname = "Item" text="Blog"></NavContainer>
            <NavContainer classname = "Item" text="About Us"></NavContainer>
            <NavContainer classname = "Item" text="Contact"></NavContainer>
        </nav>
    </nav>
  };

  export default Menu;