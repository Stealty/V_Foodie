import {
  InstaCardMedia,
  InstaCardInfo,
  InstaCardHeader,
  InstaCardActions,
} from "@molecules";
import styles from "./instaCard.module.scss";

const InstaCard = (props) => {
  return (
    <li className={styles.cardContainer}>
      <InstaCardHeader username={props.postInfo.username} />
      <InstaCardMedia
        mediaId={props.postInfo.id}
        mediaType={props.postInfo.media_type}
        mediaLink={props.postInfo.media_url}
        carouselItens={props.postInfo.children}
        postLink={props.postInfo.permalink}
      />
      <InstaCardActions />
      <InstaCardInfo
        username={props.postInfo.username}
        caption={props.postInfo.caption}
        date={props.postInfo.timestamp}
        children={props.postInfo.children}
      />
    </li>
  );
};

export default InstaCard;
