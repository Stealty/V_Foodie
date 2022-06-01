import React from "react";
import Carousel from "../components/Carousel/Carousel";
import ContactForm from "../components/contactForm";
import "./../styles/contact.scss";

const Contact = () => {
  return (
    <main className="main">
     <ContactForm />
     <Carousel />
    </main>
  );
};

export default Contact;
