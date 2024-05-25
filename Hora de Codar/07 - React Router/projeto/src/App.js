
import './App.css';

// pacotes do React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages

import Home from './pages/Home'
import About from './pages/About'

//components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      {/*02 links com react router */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
