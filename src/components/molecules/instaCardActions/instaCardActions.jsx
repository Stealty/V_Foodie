import {
  InstaCommentIcon,
  InstaLikeIcon,
  InstaSaveIcon,
  InstaShareIcon,
} from "@atoms";
import styles from "./instaCardActions.module.scss";

const InstaCardActions = () => {
  return (
    <div className={styles.cardActions}>
      <div className={styles.actions}>
        <InstaLikeIcon />
        <InstaCommentIcon />
        <InstaShareIcon />
      </div>
      <InstaSaveIcon />
    </div>
  );
};

export default InstaCardActions;
