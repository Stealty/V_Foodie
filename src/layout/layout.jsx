import React from "react";
import { SkipToContentButton } from "@/components";
import { Footer, Header } from "@/features";
import "./layout.scss";

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
