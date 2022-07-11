import styles from "./highlightImage.module.scss";

export default function HighlightImage(props) {
  return (
    <img
      alt={props.alt}
      className={styles.HighlightImage}
      src={props.bgImage}
    />
  );
}
