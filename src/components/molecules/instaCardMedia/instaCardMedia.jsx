import styles from "./instaCardMedia.module.scss";
import { Carousel } from "@molecules";

const InstaCardMedia = (props) => {
  /* console.log(props.cardInfo.carouselItens); */

  function vefifyMediaType(mediaLink, mediaType) {
    return mediaType === "IMAGE" ? (
      <img src={mediaLink} className={styles.media} />
    ) : (
      <video controls className={styles.media}>
        <source scr={mediaLink} />
      </video>
    );
  }

  function showCarousel(carouselList, mediaType) {
    if (mediaType === "CAROUSEL_ALBUM") {
      /* console.log(carouselList.data); */
      return carouselList.data.map((carouselItem) => {
        /* console.log(carouselItem.media_url); */

        return (
          <li className={styles.carouselItem}>
            {vefifyMediaType(carouselItem.media_url, carouselItem.media_type)}
          </li>
        );
      });
    }
  }

  const type = {
    IMAGE: vefifyMediaType(props.cardInfo.mediaLink, props.cardInfo.mediaType),
    VIDEO: vefifyMediaType(props.cardInfo.mediaLink, props.cardInfo.mediaType),
    CAROUSEL_ALBUM: (
      <Carousel withArrows={false} scrolling={true}>
        {showCarousel(props.cardInfo.carouselItens, props.cardInfo.mediaType)}
      </Carousel>
    ),
  };

  return type[props.cardInfo.mediaType];
};

export default InstaCardMedia;
