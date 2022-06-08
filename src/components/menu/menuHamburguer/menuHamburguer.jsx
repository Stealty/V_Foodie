import React from "react";
import "./menuHamburguer.scss";

const MenuHamburguer = (props) => {
    return <ul role = "button" tabIndex={0} onClick = {props.OnClickHandler} onKeyDown = {(KeyEvent) => props.OnClickHandler(KeyEvent)}  className={props.class}>
    <li className={`Menu-Top`}></li>
    <li className={`Menu-Middle`}></li>
    <li className={"Menu-Bottom"}></li>
</ul>
}

export default MenuHamburguer;