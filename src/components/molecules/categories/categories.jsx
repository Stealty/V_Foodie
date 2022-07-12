import { CategoryCard } from "@molecules";
import { Heading, PrimaryButton } from "@atoms";
import styles from "./categories.module.scss";
import classes from "@utils/classes";
import { useState } from "react";

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
  const [extended, setExtended] = useState(false);
  const categoriesNames = [
    "breakfast",
    "vegan",
    "meat",
    "dessert",
    "lunch",
    "chocolate",
  ];

  const categoriesClasses = classes(styles);
  categoriesClasses.add("categories");
  if (extended) categoriesClasses.add("categories--extended");

  const handleClick = () => setExtended((state) => !state);

  return (
    <div className={categoriesClasses.get()}>
      <Heading className={styles["categories__heading"]} level="2">
        Categories
      </Heading>
      <ul className={styles["categories__list"]}>
        {categoriesNames.map((category) => (
          <li className={styles["categories__list__item"]} key={category}>
            <CategoryCard category={category} color={pickColor(category)} />
          </li>
        ))}
      </ul>
      <PrimaryButton
        text={!extended ? "View All Categories" : "View Less"}
        variant="light"
        className={styles["categories__button"]}
        onClick={handleClick}
      ></PrimaryButton>
    </div>
  );
};

export default Categories;
