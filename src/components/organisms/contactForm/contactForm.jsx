import React from "react";
import { SubmitButton } from "@atoms";
import { Modal } from "@molecules";
import styles from "./contactForm.module.scss";
import ImageCard from "./imageCard";
import { useModal } from "@hooks/useModal";

const ContactForm = () => {
  const {
    message,
    sending,
    showModal,
    setSendingTransition,
    openModal,
    closeModal,
  } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando");
    const form = e.target;
    const data = new FormData(form);
    const dataObject = Object.fromEntries(data.entries());
    setSendingTransition();
    //make mock post request
    const onSuccess = () => {
      console.table(dataObject);
      openModal("Message sent successfully");
      form.reset();
    };
    const onFailure = () => {
      closeModal("Message failed to send");
    };
    setTimeout(() => onSuccess(), 2000);
  };

  return (
    <>
      <h1 className={styles.sectionTitle}>Contact Us</h1>
      <div className={styles.contactForm_wrapper}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <ImageCard />
          <div
            className={`${styles.contactForm_group} ${styles.contactForm_group__name}`}
          >
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
          <div
            className={`${styles.contactForm_group} ${styles.contactForm_group__email}`}
          >
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
          <div
            className={`${styles.contactForm_group} ${styles.contactForm_group__subject}`}
          >
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
          <div
            className={`${styles.contactForm_group} ${styles.contactForm_group__enquiry}`}
          >
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
          <div
            className={`${styles.contactForm_group} ${styles.contactForm_group__textArea}`}
          >
            <label className={styles.contactForm_Label} htmlFor="message">
              MESSAGE
            </label>
            <textarea
              className={styles.contactForm_textArea}
              name="message"
              placeholder="Enter your message..."
              required
            />
          </div>
          <div className={styles["submitButton_wrapper"]}>
            <SubmitButton
              sending={sending}
              className={styles.SubmitButton}
              text="Submit"
              type="submit"
            />
          </div>
          <Modal
            show={showModal}
            onClose={() => closeModal()}
            message={message}
          />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
