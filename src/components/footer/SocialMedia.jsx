import React from "react";
import styles from "./footer.module.scss";

import facebookImg from "/images/facebook.svg";
import instagramImg from "/images/instagram.svg";
import twitterImg from "/images/twitter.svg";

const SocialMedia = () => {
return <div className={styles.socialMedia}>
<img src={facebookImg} />
<img src={twitterImg} />
<img src={instagramImg} />
</div>
}

export default SocialMedia;