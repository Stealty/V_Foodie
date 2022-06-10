import React from "react";
import SocialImg from "./socialImg/socialImg";
import styles from "./SocialMedia.module.scss";

import facebookImg from "/images/facebook.svg";
import instagramImg from "/images/instagram.svg";
import twitterImg from "/images/twitter.svg";

const SocialMedia = (props) => {
  return (
    <div
      className={styles.socialMedia + " " + styles["socialMedia" + props.class]}
    >
      <SocialImg img={facebookImg} />
      <SocialImg img={twitterImg} />
      <SocialImg img={instagramImg} />
    </div>
  );
};

export default SocialMedia;
