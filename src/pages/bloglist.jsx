import React from "react";
import { Section } from "@/components";
import { SubscriptionCard } from "@/features";
import { Articles } from "../features";

const BlogList = () => {
  return (
    <Section arialabel="Subscription Card">
      <Articles />
      <SubscriptionCard />
    </Section>
  );
};

export default BlogList;
