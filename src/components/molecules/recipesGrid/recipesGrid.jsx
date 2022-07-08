import { useData } from "@context/useDataContext";
import Card from "../../organisms/Carousel/Card";

const RecipesGrid = () => {
  const { data, loading } = useData();

  return (
    <div>
      <ul>
        {!loading &&
          data.map((recipe) => (
            <li key={recipe.id}>
              <Card card={recipe}></Card>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RecipesGrid;
