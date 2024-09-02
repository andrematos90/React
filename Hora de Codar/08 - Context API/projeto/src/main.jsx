import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//importar o provider
import { CounterContextProvider } from "./context/CounterContext.jsx";

createRoot(document.getElementById("root")).render(

  <StrictMode>

    {/*envolver o App */}
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
    
  </StrictMode>
);
