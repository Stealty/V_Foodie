import React, { useState } from "react";
import styles from "./navigation.module.scss";

const Navigation = (props) => {
  const NavItems = props.list;
  const [currentPage, setCurrentPage] = useState(null);

  const OnClickHandler = (e) => {
    if (props.onClick != null) {
      props.onClick(e);
    }
    e.target.classList.toggle(styles["Navigation__NavItem--current"]);
    if (currentPage != null) {
      currentPage.classList.toggle(styles["Navigation__NavItem--current"]);
    }
    setCurrentPage(e.target);
    console.log(e.target, currentPage);
  }

  return <ul className={styles.Navigation}>
    {NavItems.map((Item) => (
      <li className={styles.Navigation__NavItem}
        key={Item}
        onClick={OnClickHandler}
      >{Item}</li>
    ))}
  </ul>
};

export default Navigation;
