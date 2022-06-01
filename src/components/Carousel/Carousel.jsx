import { useRef, useEffect } from "react";
import Card from "./Card/Card";
import styles from "./Carousel.module.scss";

const cards = [
  {
    image: "/images/fruit-salad.png",
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    time: "30 Minutes",
    type: "Healthy",
  },
  {
    image: "/images/beef.png",
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    type: "Western",
  },
  {
    image: "/images/japanese.png",
    title: "Healthy Japanese Fried Rice with Asparagus",
    time: "30 Minutes",
    type: "Healthy",
  },
  {
    image: "/images/taco.png",
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    time: "30 Minutes",
    type: "Eastern",
  },
];

export default function Carousel() {
  const carouselRef = useRef(null);
  const element = carouselRef.current;

  function handleScrollRight() {
    carouselRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
    console.log("scrolled");
  }

  function handleScrollLeft() {
    carouselRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
    console.log("scrolled");
  }

  return (
    <div ref={carouselRef} className={styles["carousel"]}>
      <button
        type="button"
        onClick={handleScrollLeft}
        className={styles["carousel__scrollButton--left"]}
      ></button>
      {cards.map((card) => (
        <Card card={card} key={card.title} />
      ))}
      <button
        type="button"
        onClick={handleScrollRight}
        className={styles["carousel__scrollButton--right"]}
      ></button>
    </div>
  );
}
