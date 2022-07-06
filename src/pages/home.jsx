import React from "react";
import { Section } from "@molecules";
import { SubscriptionCard, ChefSection } from "@organisms";

const Home = () => {
  return (
    <>
      <Section arialabel="Chef Section">
        <ChefSection />
      </Section>
      <Section arialabel="Subscription Card">
        <SubscriptionCard />
      </Section>
    </>
  );
};

export default Home;
