import styles from "./instaCardHeader.module.scss";
import ProfileImg from "/images/perfil_img.png";

const InstaCardHeader = ({ username }) => {
  return (
    <div className={styles.headerContainer}>
      <img src={ProfileImg} className={styles.profileImg} />
      <a href="https://www.instagram.com/_foodieland._/" target="blank">
        <h5 className={styles.username}>{username}</h5>
      </a>
      <p className={styles.location}>Tokyo, Japan</p>
    </div>
  );
};

export default InstaCardHeader;
