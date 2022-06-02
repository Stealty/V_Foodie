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
            <li className="Item">Home</li>
            <li className="Item">Recipes</li>
            <li className="Item">Blog</li>
            <li className="Item">About Us</li>
            <li className="Item">Contact</li>
        </ul>
    </nav>
  };

  export default Menu;