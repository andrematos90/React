import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar'
import Product from "./pages/Product";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
      <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="products/:id" element={<Product/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
