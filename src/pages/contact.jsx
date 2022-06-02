import React from "react";
import Carousel from "../components/Carousel/Carousel";
import ContactForm from "../components/contactForm";
import Section from "../components/section";
import SubscriptionCard from "../components/subscriptionCard";
import "./../styles/contact.scss";

const Contact = () => {
  return (
    <>
      <Section arialabelledby="Contact Us Form">
        <ContactForm />
      </Section>
      <Section arialabelledby="Subscription Card">
        <SubscriptionCard />
      </Section>
      <Section arialabelledby="Carousel" nomargin>
        <Carousel />
      </Section>
    </>
  );
};

export default Contact;
