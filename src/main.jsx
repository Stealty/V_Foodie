import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Layout from "./layout/layout";
import { Router } from "@/features";
import "./styles/global.scss";

//aqui será configurada as rotas do site
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
