import styles from "./highlights.module.scss";
import { useState } from "react";

import { Carousel, HighlightCard } from "@molecules";
import IFrameYTB from "../iFrameYTB/iFrameYTB";

export default function Highlights() {
  const [playing, setPlaying] = useState(false);
  const [videoID, setVideoID] = useState(null);

  const cards = [
    {
      title: "Baked Chicken Wings",
      description: "A delicious chicken wings with a hint of Asian flavor",
      image:
        "./images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png",
      id: "1",
      movie: "dQw4w9WgXcQ",
    },
    {
      title: "Baked Chicken Wings",
      description: "A delicious chicken wings with a hint of Asian flavor",
      image:
        "./images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png",
      id: "2",
      movie: "ub1WfnpqXFc",
    },
    {
      title: "Baked Chicken Wings",
      description: "A delicious chicken wings with a hint of Asian flavor",
      image:
        "./images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png",
      id: "3",
      movie: "dQw4w9WgXcS",
    },
    {
      title: "Baked Chicken Wings",
      description: "A delicious chicken wings with a hint of Asian flavor",
      image:
        "./images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png",
      id: "4",
      movie: "dQw4w9WgXcQ",
    },
    {
      title: "Baked Chicken Wings",
      description: "A delicious chicken wings with a hint of Asian flavor",
      image:
        "./images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png",
      id: "5",
      movie: "dQw4w9WgXcQ",
    },
  ];

  return (
    <div className={styles.highlights}>
      <IFrameYTB
        playing={playing}
        setPlaying={() => setPlaying(!playing)}
        videoID={videoID}
      />

      <Carousel scrolling={true} withArrows={false}>
        {cards.map((card) => {
          return (
            <li className={styles.highlights__item} key={card.id}>
              <HighlightCard
                title={card.title}
                description={card.description}
                image={card.image}
                videoID={card.movie}
                setVideoID={() => setVideoID(card.movie)}
                playing={playing}
                setPlaying={() => setPlaying(!playing)}
              />
            </li>
          );
        })}
      </Carousel>
    </div>
  );
}
