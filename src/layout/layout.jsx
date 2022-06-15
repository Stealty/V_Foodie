import React, { useEffect } from "react";
import { SkipToContentButton } from "@/components";
import { Footer, Header } from "@/features";
import "./layout.scss";

function Layout({ children }) {
  useEffect(() => {
    const body = document.querySelector("body");
    //stop transition on resize
    const onResize = () => {
      body.classList.add("stopTransition");
      setTimeout(() => {
        body.classList.remove("stopTransition");
      }, 100);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

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
