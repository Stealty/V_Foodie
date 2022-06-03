import Card from "./Card/Card";
import styles from "./Carousel.module.scss";

export const cards = [
  {
    id: 1,
    image: "/images/fruit-salad.png",
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    time: "30 Minutes",
    type: "Healthy",
  },
  {
    id: 2,
    image: "/images/beef.png",
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    type: "Western",
  },
  {
    id: 3,
    image: "/images/japanese.png",
    title: "Healthy Japanese Fried Rice with Asparagus",
    time: "30 Minutes",
    type: "Healthy",
  },
  {
    id: 4,
    image: "/images/taco.png",
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    time: "30 Minutes",
    type: "Eastern",
  },
];

export default function Carousel() {
  function handleScrollRight(e) {
    e.currentTarget.parentNode.scrollBy({
      left: e.currentTarget.offsetWidth,
      behavior: "smooth",
    });
  }

  function handleScrollLeft(e) {
    e.currentTarget.parentNode.scrollBy({
      left: -e.currentTarget.offsetWidth,
      behavior: "smooth",
    });
  }

  return (
    <>
      <h2 className={styles["carousel__recipes"]}>
        Check out the delicious recipe
      </h2>
      <div className={styles["carouselWrapper"]}>
        <div className={styles["carousel"]}>
          <button
            type="button"
            onClick={handleScrollLeft}
            className={styles["carousel__scrollButton--left"]}
          ></button>
          <ul className={styles["card__list"]}>
            {cards.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </ul>
          <button
            type="button"
            onClick={handleScrollRight}
            className={styles["carousel__scrollButton--right"]}
          ></button>
        </div>
      </div>
    </>
  );
}
