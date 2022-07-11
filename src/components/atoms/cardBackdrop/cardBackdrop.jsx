import styles from "./cardBackdrop.module.scss";

const CardBackdrop = ({ children, className, gradient, color, ...props }) => {
  const classList = [styles["cardBackdrop"]];
  if (className) classList.push(className);
  if (color) classList.push(styles[`cardBackdrop--${color}`]);
  if (gradient) classList.push(styles["cardBackdrop--gradient"]);
  const classes = classList.join(" ");
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default CardBackdrop;
