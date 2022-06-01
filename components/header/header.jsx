import React from "react";
import Menu from "./menu";
import Logo from "../logo/logo"
import "./header.module.scss";

const Header = () => {
  return <header className="Header"><Logo></Logo><Menu></Menu></header>;
};

export default Header;
