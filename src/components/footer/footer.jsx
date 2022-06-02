import React from "react";
import styles from "./footer.module.scss";
import Logo from "../logo/logo";

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
      </div>

      <div className={styles.divider}></div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © 2020 Flowbase. Powered by
          <span className={styles.webflow}> Webflow</span>
        </p>

        <div className={styles.socialMedia}>
          <img src={facebookImg} />
          <img src={twitterImg} />
          <img src={instagramImg} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
