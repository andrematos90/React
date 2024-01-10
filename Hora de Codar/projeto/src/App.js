import logo from './logo.svg';
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
     <TemplateExpressions></TemplateExpressions>
    </div>
  );
}



export default App;
