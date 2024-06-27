import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const rocket = "Falcon 9";
  const company = "SpaceX";

  const imprimeNumero = () => {
    return "numero 9";
  };


  const somar = (v1, v2) =>{
    return v1 + v2
  }


  //usando states
  const [numero, setNumero] = useState(0);

  return (
    <>
      <Header />

      <Home

        //atributos que serão enviados ao componente por props
        msg={"Olá React!"}
        nome={"Binzão"}
        rocket={rocket}
        empresa={company}
        fnc={imprimeNumero}
        somar={somar}

        numero = {numero}
        setNumero = {setNumero}
      />

      <p className="numero">Numero renderizado em App:{numero}</p>
    


      <Footer />
    </>
  );
}

export default App;
