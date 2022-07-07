import styles from "./categoryCard.module.scss";
import { CardBackdrop, IllustrativeImage, Paragraph } from "@atoms";

const CategoryCard = ({ category = "category", color = "neutral" }) => {
  return (
    <button className={styles["categoryCard"]} type="button">
      <CardBackdrop
        color={color}
        gradient
        className={styles["categoryCard__backdrop"]}
      />
      <IllustrativeImage
        src={`images/categories/${category}.png`}
        className={styles["categoryCard__image"]}
      />
      <Paragraph className={styles["categoryCard__title"]}>
        {category}
      </Paragraph>
    </button>
  );
};

export default CategoryCard;
