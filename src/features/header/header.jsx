import React from "react";
import { Logo, Menu } from "@/components";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles["Header"]}>
      <Logo />
      <Menu />
      <SocialMedia class={"--header"} />
    </header>
  );
};

export default Header;
