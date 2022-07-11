import React from "react";

const Heading = ({ level = 1, children, ...props }) =>
  React.createElement(`h${level}`, props, children);

export default Heading;
