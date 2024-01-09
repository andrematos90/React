import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Desafio React!</h3>
      </header>
      <FirstComponent/>
    </div>
  );
}



export default App;
