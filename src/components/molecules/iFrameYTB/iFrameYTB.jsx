import { useEffect } from "react";
import styles from "./iFrameYTB.module.scss";
import { PrimaryButton } from "@atoms";

let player;

export default function IFrameYTB() {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  useEffect(() => {
    loadPlayer();
  }, [window.onload]);

  function onYouTubeIframeAPIReady(videoID) {
    player = new YT.Player("iFrame", {
      videoId: videoID,
      playerVars: {
        playsinline: 0,
        controls: 0,
        showinfo: 0,
        rel: 0,
        modestbranding: 0,
        disablekb: 1,
        autohide: 1,
      },
      events: {
        onReady: onPlayerReady,
      },
    });
  }

  function loadPlayer() {
    window.onYouTubePlayerAPIReady = () => {
      onYouTubeIframeAPIReady("c35V0sCNadw");
    };
  }

  function onPlayerReady() {
    player.playVideo();
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

  return (
    <>
      <div className={styles.iFramePlayer__containerPlaying}>
        <div id="iFrame" className={styles.iFramePlayer__iframePlaying}></div>
      </div>
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
          text="Reload"
          onClick={() => reloadVideo()}
        >
          Reload
        </PrimaryButton>
      </div>
    </>
  );
}
