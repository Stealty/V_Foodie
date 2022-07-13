import styles from "./highlights.module.scss";

import { Carousel, HighlightCard } from "@molecules";

export default function Highlights() {
  const cards = [1, 2, 3, 4, 5];
  return (
    <div className={styles.highlights}>
      <Carousel>
        {cards.map((card) => {
          return (
            <li className={styles.highlights__item}>
              <HighlightCard key={card} />
            </li>
          );
        })}
      </Carousel>
    </div>
  );
}
