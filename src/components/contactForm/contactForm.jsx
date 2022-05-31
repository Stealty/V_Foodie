import React from "react";
import SubmitButton from "../submitButton";
import styles from "./contactForm.module.scss";

const ContactForm = () => {
  return (
    <section aria-labelledby="Contact Us Form">
      <h1 className={styles.sectionTitle}>Contact Us</h1>
      <form className={styles.contactForm}>
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
            name="enquiretype"
            required
          >
            <option value="1">Advertising</option>
            <option value="2">Request Information</option>
            <option value="3">Complaining</option>
            <option value="4">Feedback</option>
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
        <SubmitButton />
      </form>
    </section>
  );
};

export default ContactForm;
