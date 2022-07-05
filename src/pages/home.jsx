import React from "react";
import { Section, HighlightCard } from "@molecules";
import { SubscriptionCard } from "@organisms";

const Home = () => {
  return (
    <Section arialabel="Subscription Card">
      <HighlightCard />
      <SubscriptionCard />
    </Section>
  );
};

export default Home;
