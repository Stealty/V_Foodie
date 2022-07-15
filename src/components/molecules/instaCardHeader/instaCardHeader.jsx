import styles from "./instaCardHeader.module.scss";
import ProfileImg from "../../../../public/images/perfil_img.png";

const InstaCardHeader = (props) => {
  /* console.log(props); */
  return (
    <div
      href="https://www.instagram.com/_foodieland._/"
      target="blank"
      className={styles.headerContainer}
    >
      <img src={ProfileImg} className={styles.profileImg} />
      <h5 className={styles.username}>{props.username}</h5>
      <p className={styles.location}>Tokyo, Japan</p>
    </div>
  );
};

export default InstaCardHeader;
