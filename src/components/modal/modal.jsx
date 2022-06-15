import React, { useEffect, useId } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";
import trapFocus from "@/utils/trapFocus";

const ModalDialog = ({ message, onClose }) => {
  const modalId = useId();
  const descriptionID = useId();
  const closeID = useId();

  useEffect(() => {
    const modal = document.getElementById(modalId);
    const closeButton = document.getElementById(closeID);
    trapFocus(modal, closeButton, closeButton);
    closeButton.focus();
  }, [modalId, closeID]);

  return (
    <div
      className={styles.modalCard}
      role="dialog"
      aria-label="Request result"
      aria-describedby={descriptionID}
      aria-modal="true"
      id={modalId}
    >
      <p id={descriptionID}>{message}</p>
      <button
        className={styles.modalCloseButton}
        onClick={onClose}
        title="Close"
        id={closeID}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

const Backdrop = ({ onClose }) => (
  <div className={styles.modalBackdrop} onClick={onClose}></div>
);

function Modal({ message, onClose, show }) {
  //add an event listener to the window to close the modal on any button press
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keyup", closeOnEsc);
    if (show) {
    }
    return () => {
      window.removeEventListener("keyup", closeOnEsc);
    };
  }, [show]);

  return (
    <>
      {show &&
        ReactDOM.createPortal(
          <ModalDialog message={message} onClose={onClose} />,
          document.getElementById("modal-root")
        )}
      {show &&
        ReactDOM.createPortal(
          <Backdrop onClose={onClose}></Backdrop>,
          document.getElementById("backdrop-root")
        )}
    </>
  );
}

export default Modal;
