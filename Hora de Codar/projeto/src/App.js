import logo from "./logo.svg";
import "./App.css";
import Challenge02 from "./components/Challenge02";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="desafios">
        <h1>Desafios</h1>
        <ol>
          <li>Desafio 1</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
