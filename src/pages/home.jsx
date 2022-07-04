import React from "react";
import { Section } from "@/components";
import { SubscriptionCard, TryRecipes } from "@/features";

const Home = () => {
    return <>
    <Section arialabel="Recipes">
        <TryRecipes />
    </Section>
    <Section arialabel="Subscription Card">
        <SubscriptionCard />
    </Section>
    </>
}

export default Home;