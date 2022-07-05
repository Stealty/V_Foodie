import styles from "./highlightCard.module.scss";
import HighlightInfo from "@molecules/highlightInfo/highlightInfo";

function HighlightCard() {
  return (
    <div>
      <HighlightInfo />
      <div className={styles.highlightMovie}></div>
    </div>
  );
}

export default HighlightCard;
