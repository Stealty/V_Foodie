import React from "react";
import styles from "./footer.module.scss";
import Logo from "../logo/logo";
import NavContainer from "./navContainer";
import SocialMedia from "./SocialMedia";



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo className={styles.logo} />
      <div className={styles.top}>
        <p className={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit
        </p>

        <NavContainer></NavContainer>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © 2020 Flowbase. Powered by
          <span className={styles.webflow}> Webflow</span>
        </p>

      <SocialMedia></SocialMedia>
      </div>
    </footer>
  );
};

export default Footer;
