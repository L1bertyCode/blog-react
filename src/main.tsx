import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/styles/index.scss";
import App from "./app/App.tsx";
import { BrowserRouter } from "react-router-dom";
import "@/shared/config/I18n/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
