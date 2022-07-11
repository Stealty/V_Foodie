import styles from "./highlightCard.module.scss";
import HighlightInfo from "@molecules/highlightInfo/highlightInfo";
import IFramePlayer from "../../atoms/iFramePlayer/iFramePlayer";

import { useState } from "react";
import HighlightImage from "../../atoms/highlightImage/highlightImage";

export default function HighlightCard() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={styles.HighLightCard__container}>
      <HighlightInfo isPlaying={playing} setIsPlaying={setPlaying} />
      <HighlightImage
        bgImage={`url(
            "./images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png"
          )`}
        alt="Ilustration of a baked chiken wings asian"
      />
      {playing && <IFramePlayer movieId="c35V0sCNadw" isPlaying={playing} />}
    </div>
  );
}
