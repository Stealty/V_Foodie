import React from "react";
import styles from "./footer.module.scss";
import { Logo, NavItem } from "@/components";
import SocialMedia from "@/components/SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo></Logo>
      <div className={styles.footer__topWrapper}>
        <p className={styles.footer__topWrapper__descriptionText}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit
        </p>

        <nav className={styles.footer__topWrapper__navContainer}>
          <NavItem classname={"--footer"} linkto="/" text="Recipes"></NavItem>
          <NavItem classname={"--footer"} linkto="/blog" text="Blog"></NavItem>
          <NavItem classname={"--footer"} linkto="/contact" text="Contact"></NavItem>
          <NavItem classname={"--footer"} linkto="/" text="About Us"></NavItem>
        </nav>
      </div>

      <div className={styles.footer__divider}></div>

      <div className={styles.footer__bottom}>
        <p className={styles.footer__bottom__copy}>
          © 2020 Flowbase. Powered by
          <span className={styles.footer__bottom__webflow}> Webflow</span>
        </p>
        <SocialMedia class="--footer" />
      </div>
    </footer>
  );
};

export default Footer;
