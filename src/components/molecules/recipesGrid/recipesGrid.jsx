import { useData } from "@context/useDataContext";
import { SiteBanner, Card } from "@molecules";
import styles from "./recipesGrid.module.scss";
import useQuery from "@hooks/useQuery";

const RecipesGrid = () => {
  //const { data, loading } = useData();
  const [data, loading, error] = useQuery("recipes", "@/../data.json");

  return (
    <div>
      <ul className={styles["recipesGrid__list"]}>
        {!loading &&
          data.map((recipe) => (
            <Card key={recipe.id} card={recipe} background full></Card>
          ))}
        <div className={styles["recipesGrid__banner"]}>
          <SiteBanner />
        </div>
      </ul>
    </div>
  );
};

export default RecipesGrid;
