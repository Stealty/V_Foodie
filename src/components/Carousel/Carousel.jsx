import Card from "./Card/Card";
import styles from "./Carousel.module.scss";

export default function Carousel() {
  return (
    <div className={styles["carousel-wrapper"]}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
