import { IllustrativeImage, CardBackdrop } from "@atoms";
import styles from "./chefIllustration.module.scss";
const ChefIllustration = () => {
  return (
    <div className={styles["chefIllustration"]}>
      <CardBackdrop gradient className={styles["chefIllustration__backdrop"]} />
      <IllustrativeImage
        src="images/chefSection/happy-chef.png"
        className={`${styles["chefIllustration__image"]} ${styles["chefIllustration__image--chef"]}`}
      />
      <IllustrativeImage
        src="images/chefSection/meat.png"
        className={`${styles["chefIllustration__image"]} ${styles["chefIllustration__image--meat"]}`}
      />
      <IllustrativeImage
        src="images/chefSection/onion.png"
        className={`${styles["chefIllustration__image"]} ${styles["chefIllustration__image--onion"]}`}
      />
      <IllustrativeImage
        src="images/chefSection/tomato.png"
        className={`${styles["chefIllustration__image"]} ${styles["chefIllustration__image--tomato"]}`}
      />
      <IllustrativeImage
        src="images/chefSection/verdura.png"
        className={`${styles["chefIllustration__image"]} ${styles["chefIllustration__image--verdura"]}`}
      />
    </div>
  );
};

export default ChefIllustration;
