import React, { useEffect, useId } from "react";
import styles from "./modal.module.scss";

function Modal({ message, onClose, show }) {
  const descriptionID = useId();

  //add an event listener to the window to close the modal on any button press
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keyup", closeOnEsc);
    return () => {
      window.removeEventListener("keyup", closeOnEsc);
    };
  }, [show]);

  return (
    <>
      {show && (
        <div
          className={styles.modalCard}
          onClick={onClose}
          aria-label="Request result"
          aria-describedby={descriptionID}
          aria-modal="true"
          role="dialog"
        >
          <p id={descriptionID}>{message}</p>
        </div>
      )}
      {show && <div className={styles.modalBackdrop} onClick={onClose}></div>}
    </>
  );
}

export default Modal;
