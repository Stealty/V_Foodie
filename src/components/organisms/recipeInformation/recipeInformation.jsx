import styles from "./recipeInformation.module.scss";
import { Title } from "@atoms";
import { TimeInfo, TypeInfo } from "@molecules";
import HighlightAuthor from "../../molecules/highlightAuthor/highlightAuthor";

export default function RecipeInformation() {
  return (
    <div className={styles.recipeInformation}>
      <Title>Health Japanese Fried Rice</Title>
      <div className={styles.recipeInformation__resume}>
        <HighlightAuthor />
        <TimeInfo time="30 Minutes" background="rgba(0, 0, 0, 0.05)" />
        <TimeInfo time="30 Minutes" background="rgba(0, 0, 0, 0.05)" />
        <TypeInfo type="Chicken" background="rgba(0, 0, 0, 0.05)" />
      </div>
    </div>
  );
}
