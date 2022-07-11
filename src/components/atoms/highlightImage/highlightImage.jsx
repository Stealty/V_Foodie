import styles from "./highlightImage.module.scss";

export default function HighlightImage(props) {
  return (
    <div
      alt={props.alt}
      className={styles.HighlightImage}
      style={{
        backgroundImage: props.bgImage,
      }}
    />
  );
}
