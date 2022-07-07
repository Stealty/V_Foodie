import React from "react";
import { Section } from "@molecules";
import { SubscriptionCard, ChefSection, Recipes } from "@organisms";
import { HighlightCard } from "@molecules";

const Home = () => {
  return (
    <>
      <Section arialabel="Highlights Section">
        <HighlightCard />
      </Section>
      <Section arialabel="Chef Section">
        <ChefSection />
      </Section>
      <Section arialabel="Recipes">
        <Recipes />
    </Section>
      <Section arialabel="Subscription Card">
        <SubscriptionCard />
      </Section>
    </>
  );
};

export default Home;
