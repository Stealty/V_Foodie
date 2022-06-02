import React from "react";
import styles from "./footer.module.scss";
import Logo from "../logo/logo";
import NavContainer from "./navContainer";
import SocialMedia from "./SocialMedia";

import facebookImg from "/images/facebook.svg";
import instagramImg from "/images/instagram.svg";
import twitterImg from "/images/twitter.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo className={styles.logo} />
      <div className={styles.top}>
        <p className={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit
        </p>

        <nav className={styles.navContainer}>
          <NavContainer text="Recipes"></NavContainer>
          <NavContainer text="Blog"></NavContainer>
          <NavContainer text="Contact"></NavContainer>
          <NavContainer text="About Us"></NavContainer>
        </nav>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © 2020 Flowbase. Powered by
          <span className={styles.webflow}> Webflow</span>
        </p>
        <div className={styles.socialMedia}>
      <SocialMedia img = {facebookImg}></SocialMedia>
      <SocialMedia img = {twitterImg}></SocialMedia>
      <SocialMedia img = {instagramImg}></SocialMedia>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
