import styles from "./nutritionInfo.module.scss";
import { Paragraph } from "@atoms";

export default function NutritionInfo() {
  return (
    <div className={styles.nutritionInfo}>
      <div className={styles.nutritionInfo__wrapper}>
        <Paragraph className={styles.nutritionInfo__title}>
          Nutrition Information
        </Paragraph>
        <div className={styles.nutritionInfo__content}>
          <Paragraph className={styles.nutritionInfo__type}>Calories</Paragraph>
          <Paragraph className={styles.nutritionInfo__value}>
            219.9 kcal
          </Paragraph>
        </div>
        <div className={styles.nutritionInfo__content}>
          <Paragraph className={styles.nutritionInfo__type}>
            Total Fat
          </Paragraph>
          <Paragraph className={styles.nutritionInfo__value}>10.7 g</Paragraph>
        </div>
        <div className={styles.nutritionInfo__content}>
          <Paragraph className={styles.nutritionInfo__type}>Protein</Paragraph>
          <Paragraph className={styles.nutritionInfo__value}>7.9 g</Paragraph>
        </div>
        <div className={styles.nutritionInfo__content}>
          <Paragraph className={styles.nutritionInfo__type}>
            Carbohydrate
          </Paragraph>
          <Paragraph className={styles.nutritionInfo__value}>22.3 g</Paragraph>
        </div>
        <div className={styles.nutritionInfo__content}>
          <Paragraph className={styles.nutritionInfo__type}>
            Cholesterol
          </Paragraph>
          <Paragraph className={styles.nutritionInfo__value}>37.4 mg</Paragraph>
        </div>
      </div>
      <Paragraph className={styles.nutritionInfo__text}>
        * Percent Daily Values are based on a 2,000 calorie diet. Your daily
        values may be higher or lower depending on your calorie needs.
      </Paragraph>
    </div>
  );
}
