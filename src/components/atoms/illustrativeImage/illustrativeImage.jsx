const IllustrativeImage = ({ alt, ...props }) => (
  <img alt={alt ? alt : ""} {...props} />
);

export default IllustrativeImage;
