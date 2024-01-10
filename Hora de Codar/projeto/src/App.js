import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
      <MyComponent></MyComponent>
     <FirstComponent></FirstComponent>
    </div>
  );
}



export default App;
