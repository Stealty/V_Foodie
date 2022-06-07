import React from "react";
import Menu from "./menu";
import Logo from "../logo/logo"
import SocialMedia from "../footer/SocialMedia";
import styles from "./header.module.scss";

const Header = () => {
  return <header className={styles["Header"]}>
    <Logo />
    <Menu />
    <SocialMedia class={styles["Social"]} />
  </header>;
};

export default Header;