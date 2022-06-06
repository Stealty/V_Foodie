import React from "react";
import "./menuHamburguer.scss";

const MenuHamburguer = (props) => {
    return <ul onClick = {props.OnClickHandler} className={props.class}>
    <li className={`Menu-Top`}></li>
    <li className={`Menu-Middle`}></li>
    <li className={"Menu-Bottom"}></li>
</ul>
}

export default MenuHamburguer;