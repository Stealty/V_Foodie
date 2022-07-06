import IFramePlayer from "../../atoms/iFramePlayer/iFramePlayer";
import styles from "./highLightMovie.module.scss";

export default function HighLightMovie() {
  return (
    <div className={styles.HighLightMovie__container}>
      <IFramePlayer movieId="c35V0sCNadw" />
    </div>
  );
}
