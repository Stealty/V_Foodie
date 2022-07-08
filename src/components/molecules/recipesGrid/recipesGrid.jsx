import { useData } from "@context/useDataContext";
import Card from "../../organisms/Carousel/Card";
import { SiteBanner } from "@molecules";
import styles from "./recipesGrid.module.scss";

const RecipesGrid = () => {
  const { data, loading } = useData();

  return (
    <div>
      <ul className={styles["recipesGrid__list"]}>
        {!loading &&
          data.map((recipe) => <Card key={recipe.id} card={recipe}></Card>)}
        <div className={styles["recipesGrid__banner"]}>
          <SiteBanner />
        </div>
      </ul>
    </div>
  );
};

export default RecipesGrid;
