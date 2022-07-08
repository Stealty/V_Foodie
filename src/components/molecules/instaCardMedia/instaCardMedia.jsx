import styles from "./instaCardMedia.module.scss";

const InstaCardMedia = (props) => {
  /* console.log(props); */
  return <img src={props.mediaLink} className={styles.media} />;
};

export default InstaCardMedia;
