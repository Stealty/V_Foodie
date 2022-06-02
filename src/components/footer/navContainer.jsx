import React from "react";
import styles from "./footer.module.scss";

const NavContainer = () => {
    return <nav className={styles.navContainer}>
<a href="#" className={styles.navItem}>
  Recipes
</a>
<a href="#" className={styles.navItem}>
  Blog
</a>
<a href="#" className={styles.navItem}>
  Contact
</a>
<a href="#" className={styles.navItem}>
  About us
</a>
</nav>
}

export default NavContainer;