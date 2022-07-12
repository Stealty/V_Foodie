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
      <RecipesCarousel />
    </>
  );
};

export default Contact;
