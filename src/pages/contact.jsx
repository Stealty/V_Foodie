import React from "react";
import Carousel from "../components/Carousel/Carousel";
import ContactForm from "../components/contactForm";
import SubscriptionCard from "../components/subscriptionCard";
import "./../styles/contact.scss";

const Contact = () => {
  return (
    <>
      <ContactForm />
      <SubscriptionCard />
      <Carousel />
    </>
  );
};

export default Contact;
