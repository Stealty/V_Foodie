import React, {useState} from "react";
import './menu.scss'
import MenuSlider from "./menuslider";

const Menu = () => {
    const [toggle, setActive] = useState("false");
    const [classMenu, setClassMenu] = useState("");
    const Body = document.querySelector("body");

    const closeMenu = () => {
        setActive(!toggle);
        setClassMenu("Slider-Off");
        Body.classList.remove("disable-scroll");
    
        setTimeout(() => {
          setClassMenu("");
        }, 1200);
      };
      
      const OnClickHandler = () => {
        if (!toggle) {
          closeMenu();
          setClassMenu("Slider-Off");
          Body.classList.remove("disable-scroll");
    
          setTimeout(() => {
            setClassMenu("");
          }, 1200);
        } else {
          setActive(!toggle);
          setClassMenu("Slider-On");
          Body.classList.add("disable-scroll");
        }
      }
    
    return <nav className="Navigation">
        <ul onClick = {OnClickHandler} className={`Menu-Hamburguer ${toggle ? "" : "Rotation"}`}>
            <li className={`Menu-Top`}></li>
            <li className={`Menu-Middle`}></li>
            <li className={"Menu-Bottom"}></li>
        </ul>
        <MenuSlider class = {`Menu ${classMenu}`}/>
    </nav>
  };

  export default Menu;