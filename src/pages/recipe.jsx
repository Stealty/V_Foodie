import { Section } from "@molecules";
import { RecipesCarousel, SubscriptionCard } from "@organisms";
import { RecipeInformation } from "@organisms";

export default function RecipePage() {
  return (
    <>
      <Section arialabel="Recipe Title, movie and information">
        <RecipeInformation
          name={"Rainbow Chicken Salad with Almond Honey Mustard Dressing"}
          time={"30 Minutes"}
          videoId={"kXYiU_JCYtU"}
          image={"/images/rainbow-chicken.png"}
          type={"Healthy"}
        />
      </Section>
      {/* <Section arialabel="Recipe ingredients">Recipe ingredients</Section>
      <Section arialabel="Recipe instructions">Recipe instructions</Section> */}
      <Section arialabel="Subscription Card">
        <SubscriptionCard />
      </Section>
      <Section arialabel="Recipes Carousel">
        <RecipesCarousel />
      </Section>
    </>
  );
}
