import styles from "./instaCardMedia.module.scss";

const InstaCardMedia = (props) => {
  /* console.log(props); */
  /* const mediaType = (media) => {
    console.log(media.mediaType);
    media.mediaType === "IMAGE" ? (
      <img src={media.mediaLink} className={styles.media} />
    ) : (
      <video controls>
        <source scr={media.mediaLink} />
      </video>
    );
  };

  return mediaType(props); */

  const type = {
    IMAGE: <img src={props.mediaLink} className={styles.media} />,
    VIDEO: (
      <video controls>
        <source scr={props.mediaLink} />
      </video>
    ),
    CAROUSEL_ALBUM: <img src={props.mediaLink} className={styles.media} />,
  };

  return type[props.mediaType];
};

export default InstaCardMedia;
