import React, {useState} from "react";
import './menu.scss'
import NavContainer from '../footer/navContainer'

const Menu = () => {
    const [toggle, setActive] = useState("false");
    const Body = document.querySelector("body");
    const OnClickHandler = () => {
        setActive(!toggle);
        Body.classList.toggle("disable-scroll")
    }
    
    return <nav className="Navigation">
        <ul onClick = {OnClickHandler} className="Menu-Hamburguer">
            <li className={`Menu-Top ${toggle ? "" : "RotationTop"}`}></li>
            <li className={`Menu-Middle ${toggle ? "" : "RotationMid" }`}></li>
            <li className={`Menu-Bottom ${toggle ? "" : "RotationBottom"}`}></li>
        </ul>
        <nav className={`Menu ${toggle ? "" : "Slider-On"}`}>
            <NavContainer classname = "Item" text="Home"></NavContainer>
            <NavContainer classname = "Item" text="Recipes"></NavContainer>
            <NavContainer classname = "Item" text="Blog"></NavContainer>
            <NavContainer classname = "Item" text="About Us"></NavContainer>
            <NavContainer classname = "Item" text="Contact"></NavContainer>
        </nav>
    </nav>
  };

  export default Menu;