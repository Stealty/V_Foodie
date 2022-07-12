import { useEffect } from "react";
import styles from "./iFrameYTB.module.scss";

var player;

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
        playsinline: 1,
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

  function stopVideo() {
    player.stopVideo();
  }

  return (
    <>
      <div className={styles.iFramePlayer__containerPlaying}>
        <div id="iFrame" className={styles.iFramePlayer__iframePlaying}></div>
      </div>
      <button onClick={() => playVideo()}>Play</button>
      <button
        onClick={() => pauseVideo()}
        className={styles.iFramePlayer__controls}
      >
        Pause
      </button>
      <button onClick={() => reloadVideo()}>Reload</button>
    </>
  );
}
