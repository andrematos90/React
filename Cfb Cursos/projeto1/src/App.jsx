import { useState } from "react";
import Led from "./components/led/Led";
import "./App.css";

function App() {
  const [ligado, setLigado] = useState(false);

  const BLUE = "blue";
  const GREEN = "green";
  const YELLOW = "yellow";

  const colorStyles = {
    blue: { color: "#66CDAA" },
    green: { color: "#66CDAA" },
    yellow: { color: "#FFFF00" },
  };

  const [cor, setCor] = useState(BLUE);

  const changeColor = (cor) => {
    switch (cor) {
      case BLUE:
        setCor(GREEN);
        break;
      case GREEN:
        setCor(YELLOW);
        break;
      case YELLOW:
        setCor(BLUE);
        break;
      default:
        setCor(BLUE);
    }
  };

  return (
    <>
      <Led ligado={ligado} setLigado={setLigado} />

      <h1 style={colorStyles[cor]}>ooooooooooooooi</h1>
      <button
        onClick={() => {
          changeColor(cor);
        }}
      >
        troca
      </button>
    </>
  );
}

export default App;
