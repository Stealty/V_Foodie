import { Heading, Paragraph, SubmitButton } from "@atoms";
import { ChefIllustration } from "@molecules";
import styles from "./chefSection.module.scss";

const ChefSection = () => {
  return (
    <div className={styles["chefSection__wrapper"]}>
      <div className={styles["chefSection__text"]}>
        <Heading level="1" className={styles["chefSection__text__heading"]}>
          Everyone can be a chef in their own kitchen
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </Paragraph>
      </div>
      <div className={styles["chefSection__button"]}>
        <SubmitButton text="Learn More" type="button" />
      </div>
      <div className={styles["chefSection__image"]}>
        <ChefIllustration />
      </div>
    </div>
  );
};

export default ChefSection;
