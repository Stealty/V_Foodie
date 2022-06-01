import { useRef, useEffect } from "react";
import Card from "./Card/Card";
import styles from "./Carousel.module.scss";

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
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <button
        type="button"
        onClick={handleScrollRight}
        className={styles["carousel__scrollButton--right"]}
      ></button>
    </div>
  );
}
