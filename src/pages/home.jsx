import React from "react";
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

export default Home;