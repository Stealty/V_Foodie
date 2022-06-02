import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout/layout";
import Contact from "./pages/contact";
import "./styles/global.scss";

//aqui será configurada as rotas do site
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <Contact />
    </Layout>
  </React.StrictMode>
);
