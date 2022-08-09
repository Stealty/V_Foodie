import { Section } from "@molecules";
import { RecipesCarousel, SubscriptionCard } from "@organisms";
import { RecipeInformation } from "@organisms";

export default function RecipePage() {
  return (
    <>
      <Section arialabel="Recipe Title, movie and information">
        <RecipeInformation />
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
