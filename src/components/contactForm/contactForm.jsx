import React, { useState } from "react";
import SubmitButton from "../submitButton";
import styles from "./contactForm.module.scss";

const ContactForm = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviado");
    const form = e.target;
    const data = new FormData(form);
    const dataObject = Object.fromEntries(data.entries());
    setSending(true);
    //make mock post request
    const postCallback = () => {
      console.table(dataObject);
      setSending(false);
    };
    setTimeout(() => postCallback(), 2000);
  };

  return (
    <section aria-labelledby="Contact Us Form">
      <h1 className={styles.sectionTitle}>Contact Us</h1>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.contactForm_group}>
          <label className={styles.contactForm_Label} htmlFor="name">
            NAME
          </label>
          <input
            className={styles.contactForm_Input}
            type="text"
            name="name"
            placeholder="Enter your name..."
            required
          />
        </div>
        <div className={styles.contactForm_group}>
          <label className={styles.contactForm_Label} htmlFor="email">
            EMAIL ADDRESS
          </label>
          <input
            className={styles.contactForm_Input}
            type="email"
            name="email"
            placeholder="Your email address..."
            required
          />
        </div>
        <div className={styles.contactForm_group}>
          <label className={styles.contactForm_Label} htmlFor="subject">
            SUBJECT
          </label>
          <input
            className={styles.contactForm_Input}
            type="text"
            name="subject"
            placeholder="Enter subject..."
            required
          />
        </div>
        <div className={styles.contactForm_group}>
          <label className={styles.contactForm_Label} htmlFor="enquiretype">
            ENQUIRY TYPE
          </label>
          <select
            className={styles.contactForm_Input}
            type="range"
            name="enquirytype"
            required
          >
            <option value="Advertising">Advertising</option>
            <option value="Request Information">Request Information</option>
            <option value="Complaining">Complaining</option>
            <option value="Feedback">Feedback</option>
          </select>
        </div>
        <div className={styles.contactForm_group}>
          <label className={styles.contactForm_Label} htmlFor="message">
            MESSAGE
          </label>
          <textarea
            className={styles.contactForm_textArea}
            name="message"
            placeholder="Enter your message..."
            cols="30"
            rows="10"
            required
          />
        </div>
        <SubmitButton sending={sending} />
      </form>
    </section>
  );
};

export default ContactForm;
