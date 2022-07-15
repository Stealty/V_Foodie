import { useEffect } from "react";
import styles from "./iFrameYTB.module.scss";
import { PrimaryButton } from "@atoms";

let player;

export default function IFrameYTB({ videoID, playing, setPlaying }) {
  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  useEffect(() => {
    if (playing) {
      player.loadVideoById(videoID);
      playVideo();
    }
  }, [playing]);

  useEffect(() => {
    loadPlayer();
  }, [window.onload]);

  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      videoId: videoID,
      playerVars: {
        playsinline: 0,
        controls: 0,
        showinfo: 0,
        rel: 0,
        modestbranding: 0,
        disablekb: 1,
        autohide: 1,
        ecver: 1,
        loop: 1,
      },
      events: {
        onReady: onPlayerReady,
      },
    });
  }

  function loadPlayer() {
    window.onYouTubePlayerAPIReady = () => {
      onYouTubeIframeAPIReady(videoID);
    };
  }

  function onPlayerReady() {
    player.mute(true);
    player.isMuted();
    player.setLoop(true);
  }

  function playVideo() {
    player.playVideo();
  }

  function pauseVideo() {
    player.pauseVideo();
  }

  function reloadVideo() {
    player.stopVideo();
    player.playVideo();
  }

  function stopVideo() {
    player.stopVideo();
    setPlaying(false);
  }

  return (
    <>
      <div
        className={
          (playing && styles.iFramePlayer__containerPlaying) ||
          styles["iFramePlayer__containerPlaying--hidden"]
        }
      >
        <div id="player" className={styles.iFramePlayer__iframePlaying}></div>
      </div>
      {playing && (
        <div className={styles.iFrameControls__wrapper}>
          <PrimaryButton
            type="button"
            className={styles.iFramePlayer__button}
            text="Play"
            onClick={() => playVideo()}
          >
            Play
          </PrimaryButton>
          <PrimaryButton
            type="button"
            className={styles.iFramePlayer__button}
            text="Pause"
            onClick={() => pauseVideo()}
          >
            Pause
          </PrimaryButton>

          <PrimaryButton
            type="button"
            className={styles.iFramePlayer__button}
            text="Stop"
            onClick={() => stopVideo()}
          >
            Stop
          </PrimaryButton>
          <PrimaryButton
            type="button"
            className={styles.iFramePlayer__button}
            text="Reload"
            onClick={() => reloadVideo()}
          >
            Reload
          </PrimaryButton>
        </div>
      )}
    </>
  );
}
