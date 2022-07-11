import React from "react";
import { Section } from "@molecules";
import {
  SubscriptionCard,
  ChefSection,
  Recipes,
  CategoriesSection,
} from "@organisms";
import { HighlightCard } from "@molecules";
import { Categories, RecipesGrid } from "@molecules";

const Home = () => {
  return (
    <>
      {/* <Section arialabel="Highlights Section">
        <HighlightCard />
      </Section> */}
      <Section arialabel="Categories">
        <CategoriesSection />
      </Section>
      <Section arialabel="Chef Section">
        <ChefSection />
      </Section>
      <Section arialabel="Recipes">{/* <Recipes /> */}</Section>
      <Section arialabel="Subscription Card">
        <SubscriptionCard />
      </Section>
    </>
  );
};

export default Home;
