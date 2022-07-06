import styles from "./iFramePlayer.module.scss";
import React, { useState } from "react";
import SubmitButton from "@atoms/SubmitButton/SubmitButton";
import { useRef } from "react";
import { useEffect } from "react";

export default function IFramePlayer(props) {
  const [playing, setPlaying] = useState(false);
  const movieRef = useRef(null);

  return (
    <>
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
            ? styles.iFramePlayer__containerPlaying
            : styles.IFramePlayer__container
        }
      />
      <div className={styles.iFramePlayer__buttonWrapperPlaying}>
        <SubmitButton
          type="button"
          text="View Recipes"
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0.25C8.07164 0.25 6.18657 0.821828 4.58319 1.89317C2.97982 2.96451 1.73013 4.48726 0.992179 6.26884C0.254225 8.05042 0.061142 10.0108 0.437348 11.9021C0.813554 13.7934 1.74215 15.5307 3.10571 16.8943C4.46928 18.2579 6.20656 19.1865 8.09787 19.5627C9.98919 19.9389 11.9496 19.7458 13.7312 19.0078C15.5127 18.2699 17.0355 17.0202 18.1068 15.4168C19.1782 13.8134 19.75 11.9284 19.75 10C19.747 7.41506 18.7188 4.93684 16.891 3.10901C15.0632 1.28118 12.5849 0.252988 10 0.25ZM13.416 10.624L8.91602 13.624C8.8031 13.6995 8.67181 13.7428 8.53617 13.7494C8.40054 13.756 8.26565 13.7257 8.14592 13.6616C8.02619 13.5975 7.92612 13.5021 7.85639 13.3856C7.78665 13.2691 7.74988 13.1358 7.75 13V7C7.74988 6.8642 7.78665 6.73092 7.85639 6.6144C7.92612 6.49787 8.02619 6.40248 8.14592 6.3384C8.26565 6.27433 8.40054 6.24398 8.53617 6.2506C8.67181 6.25721 8.8031 6.30055 8.91602 6.37598L13.416 9.37598C13.5188 9.44446 13.603 9.53725 13.6613 9.64611C13.7195 9.75497 13.75 9.87653 13.75 10C13.75 10.1235 13.7195 10.245 13.6613 10.3539C13.603 10.4627 13.5188 10.5555 13.416 10.624Z"
                fill="white"
              />
            </svg>
          }
          onClick={(event) => {
            console.log(event.currentTarget.className);
            if (playing) {
              event.currentTarget.style =
                "position: absolute; left: -140px; bottom: 115px";
            } else {
              event.currentTarget.style = "position: none; left: 0; bottom: 0";
            }

            setPlaying(!playing);
          }}
        />
      </div>
    </>
  );
}
