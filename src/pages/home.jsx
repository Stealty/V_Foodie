import React from "react";
import { Section } from "@molecules";
import { SubscriptionCard, Recipes } from "@organisms";

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

export default Home;
