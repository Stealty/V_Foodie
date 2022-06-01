import React from "react";
import Menu from "./menu";
import Logo from "../logo/logo"
import styles from "./header.module.scss";

const Header = () => {
  return <header className={styles["Header"]}><Logo></Logo><Menu></Menu><Social></Social></header>;
};

export default Header;
