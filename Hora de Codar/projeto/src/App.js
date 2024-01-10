import logo from './logo.svg';
import './App.css';
import Events from './components/events';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
      <Events></Events>
    </div>
  );
}



export default App;
