import styles from "./cardStack.module.scss";

const CardStack = ({ children }) => {
  return <div className={styles.cardStack}>{children}</div>;
};

export default CardStack;
