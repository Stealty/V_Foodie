import styles from "./instaCardMedia.module.scss";
import { Carousel } from "@molecules";

const InstaCardMedia = ({ mediaType, mediaLink, carouselItens, postLink }) => {
  /* console.log(carouselItens); */

  function vefifyMediaType(mediaLink, mediaType) {
    return mediaType === "IMAGE" ? (
      <a href={postLink} target="_blank">
        <img src={mediaLink} className={styles.media} />
      </a>
    ) : (
      <a href={postLink} target="_blank">
        <video controls className={styles.media} scr={mediaLink}></video>
      </a>
    );
  }

  function showCarousel(carouselList, mediaType) {
    if (mediaType === "CAROUSEL_ALBUM") {
      /* console.log(carouselList.data); */
      return carouselList.data.map((carouselItem) => {
        /* console.log(carouselItem.media_url); */

        return (
          <li key={Math.random() * 10} className={styles.carouselItem}>
            {vefifyMediaType(carouselItem.media_url, carouselItem.media_type)}
          </li>
        );
      });
    }
  }

  const type = {
    IMAGE: vefifyMediaType(mediaLink, mediaType),
    VIDEO: vefifyMediaType(mediaLink, mediaType),
    CAROUSEL_ALBUM: (
      <Carousel withArrows={false} scrolling={true}>
        {showCarousel(carouselItens, mediaType)}
      </Carousel>
    ),
  };

  return type[mediaType];
};

export default InstaCardMedia;
