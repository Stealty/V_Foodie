import React from "react";
import './menu.scss'

const Menu = () => {
    return <nav className="Navigation">
        <ul className="Menu-Hamburguer">
            <li className="Menu-Top"></li>
            <li className="Menu-Middle"></li>
            <li className="Menu-Bottom"></li>
        </ul>
        <ul className="Menu">
            <li className="">Home</li>
            <li className="">Recipes</li>
            <li className="">Blog</li>
            <li className="">About Us</li>
            <li className="">Contact</li>
        </ul>
    </nav>
  };

  export default Menu;