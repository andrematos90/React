import logo from './logo.svg';
import './App.css';
import Challenge02 from './components/Challenge02';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Challenge02></Challenge02>
       
      </header>
    </div>
  );
}



export default App;
