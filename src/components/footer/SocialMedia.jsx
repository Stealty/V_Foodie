import React from "react";
import SocialImg from "./socialImg";
import styles from "./footer.module.scss";

import facebookImg from "/images/facebook.svg";
import instagramImg from "/images/instagram.svg";
import twitterImg from "/images/twitter.svg";

const SocialMedia = (props) => {
    return <div className={props.class ? `${styles.socialMedia} ${props.class}` : styles.socialMedia}>
    <SocialImg img={facebookImg}/>
    <SocialImg img={twitterImg}/>
    <SocialImg img={instagramImg}/>
  </div>
}

export default SocialMedia;