import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ArticleProvider } from "./ArticleContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
    <BrowserRouter>
      <ArticleProvider>
        <App />
      </ArticleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
