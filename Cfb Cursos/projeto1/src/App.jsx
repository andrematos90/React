import { useState } from "react";
import Led from "./components/led/Led";
import "./App.css";

function App() {
  const [ligado, setLigado] = useState(false);

  return (
    <>
      <Led ligado={ligado} setLigado={setLigado} />
    </>
  );
}

export default App;
