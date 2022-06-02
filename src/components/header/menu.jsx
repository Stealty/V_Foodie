import React from "react";
import './menu.scss'
import NavContainer from '../footer/navContainer'

const Menu = () => {
    
    return <nav className="Navigation">
        <ul className="Menu-Hamburguer">
            <li className="Menu-Top"></li>
            <li className="Menu-Middle"></li>
            <li className="Menu-Bottom"></li>
        </ul>
        <nav className="Menu">
            <NavContainer classname = "Item" text="Home"></NavContainer>
            <NavContainer classname = "Item" text="Recipes"></NavContainer>
            <NavContainer classname = "Item" text="Blog"></NavContainer>
            <NavContainer classname = "Item" text="About Us"></NavContainer>
            <NavContainer classname = "Item" text="Contact"></NavContainer>
        </nav>
    </nav>
  };

  export default Menu;