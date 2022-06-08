import React from "react";

const NavContainer = (props) => {
  return (
    <a href="#" className={props.classname}>
      {props.text}
    </a>
  );
};

export default NavContainer;
