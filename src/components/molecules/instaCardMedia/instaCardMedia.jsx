import styles from "./instaCardMedia.module.scss";
import { Carousel } from "@molecules";

const InstaCardMedia = ({
  mediaId,
  mediaType,
  mediaLink,
  carouselItens,
  postLink,
}) => {
  function vefifyMediaType(mediaLink, mediaType, postLink) {
    return mediaType === "IMAGE" ? (
      <a href={postLink} target="_blank">
        <img key={mediaId} src={mediaLink} className={styles.media} />
      </a>
    ) : (
      <a href={postLink} target="_blank">
        <video controls className={styles.media} scr={mediaLink}></video>
      </a>
    );
  }

  function showCarousel(carouselList, mediaType) {
    if (mediaType === "CAROUSEL_ALBUM") {
      return carouselList.data.map((carouselItem) => {
        return (
          <li className={styles.carouselItem}>
            <a href={postLink} target="_blank">
              {vefifyMediaType(carouselItem.media_url, carouselItem.media_type)}
            </a>
          </li>
        );
      });
    }
  }

  const type = {
    IMAGE: vefifyMediaType(mediaLink, mediaType, postLink),
    VIDEO: vefifyMediaType(mediaLink, mediaType),
    CAROUSEL_ALBUM: (
      <Carousel withArrows={false} scrolling={true}>
        {showCarousel(carouselItens, mediaType, postLink)}
      </Carousel>
    ),
  };

  return type[mediaType];
};

export default InstaCardMedia;
