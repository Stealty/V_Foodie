import React from "react";
import styles from "./modal.module.scss";

function Modal({ message, onClose, show }) {
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
