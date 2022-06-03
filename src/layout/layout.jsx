import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./layout.scss";
import SkipToContentButton from "../components/skipToContentButton";

function Layout({ children }) {
  return (
    <>
      <SkipToContentButton />
      <Header />
      <main className="main" id="maincontent">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
