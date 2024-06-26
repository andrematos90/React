import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const rocket = "Falcon 9";
  const company = "SpaceX";

  const imprimeNumero = () => {
    return "numero 9";
  };


  const somar = (v1, v2) =>{
    return v1 + v2
  }

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
      />

      <Footer />
    </>
  );
}

export default App;
