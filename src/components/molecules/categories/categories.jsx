import { CategoryCard } from "@molecules";
import { Heading, PrimaryButton } from "@atoms";
import styles from "./categories.module.scss";

const pickColor = (color) => {
  const categoriesColors = {
    breakfast: "grey",
    vegan: "green",
    meat: "red",
    dessert: "yellow",
  };
  return categoriesColors[color] || "neutral";
};

const Categories = () => {
  const categoriesNames = [
    "breakfast",
    "vegan",
    "meat",
    "dessert",
    "lunch",
    "chocolate",
  ];

  return (
    <div className={styles["categories"]}>
      <Heading className={styles["categories__heading"]}>Categories</Heading>
      <PrimaryButton
        text="View All Categories"
        variant="light"
        className={styles["categories__button"]}
      ></PrimaryButton>
      <ul className={styles["categories__list"]}>
        {categoriesNames.map((category) => (
          <li className={styles["categories__list__item"]} key={category}>
            <CategoryCard category={category} color={pickColor(category)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
