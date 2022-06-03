import React, { useEffect } from "react";
import styles from "./modal.module.scss";

function Modal({ message, onClose, show }) {
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  }, [show]);

  //add an event listener to the window to close the modal on any button press
  useEffect(() => {
    window.addEventListener("keyup", onClose);
    return () => {
      window.removeEventListener("keyup", onClose);
    };
  }, [show]);

  return (
    <>
      {show && (
        <div className={styles.modalCard} onClick={onClose}>
          <p>{message}</p>
        </div>
      )}
      {show && <div className={styles.modalBackdrop} onClick={onClose}></div>}
    </>
  );
}

export default Modal;
