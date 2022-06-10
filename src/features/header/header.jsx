import React, { useEffect, useState } from "react";
import { Logo, Menu } from "@/components";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import styles from "./header.module.scss";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const toogleFixed = () => {
    setIsFixed((currentIsFixed) => !currentIsFixed);
  };

  useEffect(() => {
    //check if screen is small
    const checkSize = () => {
      if (window.innerWidth < 1024) {
        setIsScreenSmall(false);
      } else {
        setIsScreenSmall(true);
      }
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const headerClasses =
    isFixed && !isScreenSmall
      ? styles.header + " " + styles["header--fixed"]
      : styles["header"];
  return (
    <>
      <header className={headerClasses}>
        <Logo />
        <Menu onExpand={toogleFixed} />
        <SocialMedia class={"--header"} />
      </header>
      {isFixed && <div className={styles["header__padding"]}></div>}
    </>
  );
};

export default Header;
