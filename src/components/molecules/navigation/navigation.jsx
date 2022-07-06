import React from "react";
import styles from "./navigation.module.scss";

const Navigation = (props) => {
  const NavItems = props.list;

  return <ul className={styles.Navigation}>
      {NavItems.map((Item) => (
        <li className={styles.Navigation__NavItem}
          key={Item}
          onClick = {props.onClick}
        >{Item}</li>
      ))}
      </ul>
};

export default Navigation;
