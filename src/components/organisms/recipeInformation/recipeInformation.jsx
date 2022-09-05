import styles from "./recipeInformation.module.scss";
import { Title } from "@atoms";
import {
  TimeInfo,
  TypeInfo,
  PrinterButton,
  ShareButton,
  HighlightAuthor,
  NutritionInfo,
  IFrameYTB,
} from "@molecules";
import { useState } from "react";

export default function RecipeInformation({
  name,
  time,
  videoId,
  image,
  type,
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={styles.RecipeInformation}>
      <Title>{name}</Title>
      <div className={styles.RecipeInformation__resume}>
        <HighlightAuthor />
        <TimeInfo time={time} background="rgba(0, 0, 0, 0.05)" />
        <TimeInfo time={time} background="rgba(0, 0, 0, 0.05)" />
        <TypeInfo type={type} background="rgba(0, 0, 0, 0.05)" />
      </div>
      <div className={styles.RecipeInformation__tools}>
        <PrinterButton />
        <ShareButton />
      </div>

      <div className={styles.RecipeInformation__content}>
        <img
          src={image}
          alt={"Ilustration of a" + name}
          onClick={() => setPlaying(true)}
          className={styles.RecipeInformation__ilustration}
        />
        <div className={styles.RecipeInformation__movie}>
          <IFrameYTB
            videoId={videoId}
            playing={playing}
            setPlaying={setPlaying}
          />
        </div>

        <NutritionInfo />
      </div>
    </div>
  );
}
