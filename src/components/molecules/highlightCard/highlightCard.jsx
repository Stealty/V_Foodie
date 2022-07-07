import styles from "./highlightCard.module.scss";
import HighlightInfo from "@molecules/highlightInfo/highlightInfo";
import IFramePlayer from "../../atoms/iFramePlayer/iFramePlayer";

export default function HighlightCard() {
  return (
    <div className={styles.HighLightCard__container}>
      <HighlightInfo />
      <IFramePlayer movieId="c35V0sCNadw" />
    </div>
  );
}
