import React from "react";
import { Section } from "@molecules";
import { RecipesCarousel, ContactForm, SubscriptionCard } from "@organisms";
import "@/styles/contact.scss";

const Contact = () => {
  return (
    <>
      <Section arialabel="Contact Us Form">
        <ContactForm />
      </Section>
      <Section arialabel="Subscription Card">
        <SubscriptionCard />
      </Section>
      <Section arialabel="Recipes Carousel">
        <RecipesCarousel />
      </Section>
    </>
  );
};

export default Contact;
