import styles from "./iFramePlayer.module.scss";
import React from "react";
import { useRef } from "react";

export default function IFramePlayer(props) {
  const playing = props.isPlaying;
  const movieRef = useRef(null);

  return (
    <>
      <div
        className={
          playing
            ? styles.iFramePlayer__containerPlaying
            : styles.IFramePlayer__container
        }
      >
        <iframe
          ref={movieRef}
          id="iFramePlayer"
          loading="lazy"
          src={
            "https://www.youtube.com/embed/" +
            props.movieId +
            "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=" +
            props.movieId +
            "&enablejsapi=1"
          }
          title="BEST COOK ASMR FOOD COOKING 🤤🤤🤤 - Hamburger and Cream Cheese"
          frameBorder="0"
          allowFullScreen
          className={
            playing
              ? styles.iFramePlayer__iframePlaying
              : styles.IFramePlayer__iframe
          }
        />
      </div>
    </>
  );
}
