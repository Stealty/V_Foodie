import React from "react";
import { Section } from "@molecules";
import { Carousel, ContactForm, SubscriptionCard } from "@organisms";
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
      <Section arialabel="Carousel" nomargin>
        <Carousel />
      </Section>
    </>
  );
};

export default Contact;
