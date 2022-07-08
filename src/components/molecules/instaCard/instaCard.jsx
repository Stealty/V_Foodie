import InstaCardHeader from "../instaCardHeader/instaCardHeader";
import InstaCardInfo from "../instaCardInfo/instaCardInfo";
import InstaCardMedia from "../instaCardMedia/instaCardMedia";
import styles from "./instaCard.module.scss";

const InstaCard = (props) => {
  console.log(props);
  return (
    <a
      href={props.postInfo.permaLink}
      target="_blank"
      className={styles.cardContainer}
    >
      <InstaCardHeader username={props.postInfo.username} />
      <InstaCardMedia
        mediaType={props.postInfo.media_type}
        mediaLink={props.postInfo.media_url}
      />
      <InstaCardInfo
        caption={props.postInfo.caption}
        username={props.postInfo.username}
        date={props.postInfo.timestamp}
      />
    </a>
  );
};

export default InstaCard;
