import { Heading, Paragraph, SubmitButton } from "@atoms";
import { ChefIllustration } from "@molecules";

const ChefSection = () => {
  return (
    <div className="chefSection__Wrapper">
      <Heading level="2">Everyone can be a chef in their own kitchen</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
      </Paragraph>
      <SubmitButton text="Learn More" type="button" />
      <ChefIllustration />
    </div>
  );
};

export default ChefSection;
