import React from "react";
import styles from "./footer.module.scss";

const NavContainer = (props) => {
    return <a href="#" className={props.classname}>
 {props.text}
</a>
}

export default NavContainer;