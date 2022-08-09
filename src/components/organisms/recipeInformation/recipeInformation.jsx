import styles from "./recipeInformation.module.scss";
import { Title } from "@atoms";
import {
  TimeInfo,
  TypeInfo,
  PrinterButton,
  ShareButton,
  HighlightAuthor,
} from "@molecules";

export default function RecipeInformation() {
  return (
    <div className={styles.RecipeInformation}>
      <Title>Health Japanese Fried Rice</Title>
      <div className={styles.RecipeInformation__resume}>
        <HighlightAuthor />
        <TimeInfo time="30 Minutes" background="rgba(0, 0, 0, 0.05)" />
        <TimeInfo time="30 Minutes" background="rgba(0, 0, 0, 0.05)" />
        <TypeInfo type="Chicken" background="rgba(0, 0, 0, 0.05)" />
      </div>
      <div className={styles.RecipeInformation__tools}>
        <PrinterButton />
        <ShareButton />
      </div>
    </div>
  );
}
