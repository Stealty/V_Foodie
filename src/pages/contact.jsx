import React from "react";
import Carousel from "../components/Carousel/Carousel";
import ContactForm from "../components/contactForm";
import Section from "../components/section";
import SubscriptionCard from "../components/subscriptionCard";
import "./../styles/contact.scss";

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
