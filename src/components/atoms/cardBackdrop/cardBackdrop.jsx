import styles from "./CardBackdrop.module.scss";

const CardBackdrop = ({ children, className, gradient, ...props }) => {
  const classes =
    className +
    " " +
    styles["cardBackdrop"] +
    " " +
    (gradient ? styles["cardBackdrop--gradient"] : "");
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default CardBackdrop;
