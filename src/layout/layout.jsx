import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
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
