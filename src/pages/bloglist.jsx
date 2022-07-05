import React from "react";
import { Section } from "@molecules";
import { SubscriptionCard, BlogArticles } from "@organisms";

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
