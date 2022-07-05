import styles from "./highlightInfo.module.scss";
import TimeInfo from "@molecules/timeInfo/TimeInfo";
import TypeInfo from "@molecules/typeInfo/TypeInfo";

export default function HighlightInfo() {
  return (
    <div className={styles.highlightInfo}>
      <span className={styles.highlightInfo__hotAlert}>
        <img
          src="./images/HotRecipes.png"
          className={styles.highlightInfo__hotAlertImg}
        />
        Hot Recipes
      </span>
      <h1 className={styles.highlightInfo__title}>
        Spicy delicious chicken wings
      </h1>
      <p className={styles.highlightInfo__text}>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
      </p>

      <div className={styles.hightlightInfo__details}>
        <TimeInfo time="30 Minutes" background="rgba(0, 0, 0, 0.05)" />
        <TypeInfo type="Chicken" background="rgba(0, 0, 0, 0.05)" />
      </div>
    </div>
  );
}
