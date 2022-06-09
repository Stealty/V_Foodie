import React from "react";
import styles from "./footer.module.scss";
import { Logo, NavItem } from "@/components";
import SocialMedia from "@/components/SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo></Logo>
      <div className={styles.top}>
        <p className={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit
        </p>

        <nav className={styles.navContainer}>
          <NavItem classname={"--footer"} text="Recipes"></NavItem>
          <NavItem classname={"--footer"} text="Blog"></NavItem>
          <NavItem classname={"--footer"} text="Contact"></NavItem>
          <NavItem classname={"--footer"} text="About Us"></NavItem>
        </nav>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © 2020 Flowbase. Powered by
          <span className={styles.webflow}> Webflow</span>
        </p>
        <SocialMedia class={styles.socialMedia} />
      </div>
    </footer>
  );
};

export default Footer;
