import styles from "./highlightCard.module.scss";
import { HighlightInfo } from "@molecules";
import { HighlightImage } from "@atoms";

export default function HighlightCard({
  playing,
  setPlaying,
  title,
  description,
  image,
  setVideoID,
  videoID,
}) {
  return (
    <div
      className={
        !playing
          ? styles.HighLightCard__container
          : styles.HighLightCard__container +
            " " +
            styles["HighLightCard__container--opaque"]
      }
    >
      <HighlightInfo
        title={title}
        description={description}
        playing={playing}
        setPlaying={() => setPlaying(!playing)}
        videoID={videoID}
        setVideoID={setVideoID}
      />
      <HighlightImage
        src={image}
        alt="Ilustration of a baked chiken wings asian"
      />
      <div
        className={
          playing
            ? styles.HighlightCard__iFrame +
              " " +
              styles["HighlightCard__iFrame--playing"]
            : styles.HighlightCard__iFrame
        }
      ></div>
    </div>
  );
}
