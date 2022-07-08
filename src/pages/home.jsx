import React from "react";
import { Section, HighlightCard } from "@molecules";
import { SubscriptionCard, InstaSection } from "@organisms";

const Home = () => {
  return (
    <Section arialabel="Subscription Card">
      <HighlightCard />
      <InstaSection />
      <SubscriptionCard />
    </Section>
  );
};

export default Home;
