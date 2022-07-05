import styles from "./highlightAuthor.module.scss";

export default function HighlightAuthor() {
  return (
    <div className={styles.HighlightAuthor__container}>
      <img
        src="./images/Dianne Russel.png"
        alt="A picture of Dianne Russel"
        className={styles.HighlightAuthor__image}
      />
      <div className={styles.HighlightAuthor__details}>
        <h2 className={styles.HighlightAuthor__name}>John Smith</h2>
        <p className={styles.HighlightAuthor__date}>15 March 2022</p>
      </div>
    </div>
  );
}
