import styles from "./Carousel.module.scss";
import classes from "@utils/classes";
import { useEffect } from "react";

export default function Carousel({
  children,
  withArrows = true,
  scrolling = false,
}) {
  useEffect(() => {
    const carouselList = document.querySelector("#carouselList");
    if (scrolling) {
      carouselList.addEventListener("click", (event) => {
        const cardWidth = event.target.parentNode.offsetWidth;
        const cardPercentage = Math.floor((event.layerX * 100) / cardWidth);

        if (event.layerY > 660 || event.layerY < 52) {
          return;
        }
        if (cardPercentage < 20) {
          handleScrollRight(event);
        }
        if (cardPercentage > 130) {
          handleScrollLeft(event);
        }
      });
    }
  }, [window.onload]);

  const handleScrollRight = (event) => {
    event.currentTarget.parentNode.scrollBy({
      left: event.currentTarget.parentNode.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  const handleScrollLeft = (event) => {
    event.currentTarget.parentNode.scrollBy({
      left: -event.currentTarget.parentNode.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  const buttonRightClasses = classes(styles);
  buttonRightClasses.add("carousel__scrollButton");
  buttonRightClasses.add("carousel__scrollButton--right");
  const buttonLeftClasses = classes(styles);
  buttonLeftClasses.add("carousel__scrollButton");
  buttonLeftClasses.add("carousel__scrollButton--left");

  return (
    <div className={styles["carouselWrapper"]}>
      <div className={styles["carousel"]}>
        {withArrows && (
          <button
            type="button"
            onClick={handleScrollLeft}
            className={buttonLeftClasses.get()}
          ></button>
        )}

        <ul className={styles["carousel__list"]} id="carouselList">
          {children}
        </ul>
        {withArrows && (
          <button
            type="button"
            onClick={handleScrollRight}
            className={buttonRightClasses.get()}
          ></button>
        )}
      </div>
    </div>
  );
}
