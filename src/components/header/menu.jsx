import React from "react";
import './menu.scss'

const Menu = () => {
    return <nav>
        <ul className="Menu-Hamburguer">
            <li className="Menu-Top"></li>
            <li className="Menu-Middle"></li>
            <li className="Menu-Bottom"></li>
        </ul>
        <ul className="Menu Menu-Slider-On">
            <li>Home</li>
            <li>Recipes</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
    </nav>
  };

  export default Menu;