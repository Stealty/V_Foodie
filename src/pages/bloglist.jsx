import React from "react";
import { Section } from "@/components";
import { SubscriptionCard } from "@/features";
import ArticleFilter from "../components/ArticleFilter/ArticleFilter";

const BlogList = () => {
  return (
    <Section arialabel="Subscription Card">
      <ArticleFilter />
      <SubscriptionCard />
    </Section>
  );
};

export default BlogList;
