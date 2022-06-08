import React from "react";
import styles from "./footer.module.scss";
import { Logo } from "@/components";
import NavContainer from "@/components/navContainer/navContainer";
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
          <NavContainer
            classname={styles.navItem}
            text="Recipes"
          ></NavContainer>
          <NavContainer classname={styles.navItem} text="Blog"></NavContainer>
          <NavContainer
            classname={styles.navItem}
            text="Contact"
          ></NavContainer>
          <NavContainer
            classname={styles.navItem}
            text="About Us"
          ></NavContainer>
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
