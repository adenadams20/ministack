import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ à ajouter
import { QuestionProvider } from "./context/QuestionContext"; // ✅ optionnel, si tu l’utilises globalement
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QuestionProvider>
        <App />
      </QuestionProvider>
    </BrowserRouter>
  </StrictMode>
);
