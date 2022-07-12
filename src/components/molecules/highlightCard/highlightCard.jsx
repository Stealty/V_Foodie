import styles from "./highlightCard.module.scss";
import HighlightInfo from "@molecules/highlightInfo/highlightInfo";
import IFrameYTB from "../iFrameYTB/iFrameYTB";

import { useState } from "react";
import HighlightImage from "../../atoms/highlightImage/highlightImage";

export default function HighlightCard() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={styles.HighLightCard__container}>
      <HighlightInfo isPlaying={playing} setIsPlaying={setPlaying} />
      <HighlightImage
        src={
          "./images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png"
        }
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
      >
        <IFrameYTB
          isPlaying={playing}
          setIsPlaying={setPlaying}
          videoID={"c35V0sCNadw"}
        />
      </div>
    </div>
  );
}
