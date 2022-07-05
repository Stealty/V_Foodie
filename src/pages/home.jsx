import React from "react";
<<<<<<< HEAD
import { Section } from "@/components";
import { SubscriptionCard, Recipes } from "@/features";

const Home = () => {
    return <>
    <Section arialabel="Recipes">
        <Recipes />
    </Section>
    <Section arialabel="Subscription Card">
        <SubscriptionCard />
    </Section>
    </>
}
=======
import { Section } from "@molecules";
import { SubscriptionCard } from "@organisms";

const Home = () => {
  return (
    <Section arialabel="Subscription Card">
      <SubscriptionCard />
    </Section>
  );
};
>>>>>>> development

export default Home;
