import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { CounterContextProvider } from "./context/CounterContex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </StrictMode>
);
