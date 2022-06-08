import React from "react";
import { Section } from "@/components";
import { Carousel, ContactForm, SubscriptionCard } from "@/features";
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
