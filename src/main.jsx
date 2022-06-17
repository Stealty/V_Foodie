import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Layout from "./layout/layout";
import Contact from "./pages/contact";
import BlogList from "./pages/bloglist";
import NotFoundPage from "./pages/notfoundpage";
import "./styles/global.scss";

//aqui será configurada as rotas do site
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<BlogList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
