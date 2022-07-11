import { Categories, RecipesGrid } from "@molecules";
import { Heading, Paragraph } from "@atoms";
import styles from "./categoriesSection.module.scss";

const CategoriesSection = () => {
  return (
    <>
      <div className={styles.categoriesSection}>
        <Categories />
      </div>
      <div className={styles.recipes}>
        <Heading className={styles["recipes__heading"]}>
          Simple and tasty recipes
        </Heading>
        <Paragraph className={styles["recipes__paragraph"]} muted>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </Paragraph>
        <RecipesGrid />
      </div>
    </>
  );
};

export default CategoriesSection;
