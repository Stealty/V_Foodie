import React, { useState } from "react";
import styles from "./navigation.module.scss";

const Navigation = (props) => {
    const NavItems = [1,2,3,4,5,6,7];

    return <nav className={styles.Navigation}>
    {NavItems.map((Item) => (
        <li className={styles.NavItem}>{Item}</li>
    ))}
    </nav>
}

export default Navigation;