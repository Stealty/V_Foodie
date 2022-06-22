import React from "react";
import { Section } from "@/components";
import { SubscriptionCard, Navigation } from "@/features";

const BlogList = () => {
    return <>
    <Section arialabel="Navigation Bar">
    <Navigation />
    </Section>
    <Section arialabel="Subscription Card">
    <SubscriptionCard />
    </Section>
    </>
}

export default BlogList;