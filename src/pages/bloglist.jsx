import React from "react";
import { Section } from "@/components";
import { SubscriptionCard, BlogArticles } from "@/features";

const BlogList = () => {
  return (
    <>
      <Section arialabel="Blog Articles">
        <BlogArticles />
      </Section>
      <Section arialabel="Subscription Card">
        <SubscriptionCard />
      </Section>
    </>
  );
};

export default BlogList;
