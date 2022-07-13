import { Heading } from "@atoms";
import { Card, Section, Carousel } from "@molecules";
import { useData } from "@context/useDataContext";
import styles from "./recipesCarousel.module.scss";

const RecipesCarosel = () => {
  const { data, loading } = useData();

  return (
    <Section arialabel="Carousel" nomargin>
      <Heading level="2" className={styles["carouselTitle"]}>
        Check out the delicious recipe
      </Heading>
      {!loading && (
        <Carousel>
          {data.slice(0, 4).map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </Carousel>
      )}
    </Section>
  );
};

export default RecipesCarosel;
