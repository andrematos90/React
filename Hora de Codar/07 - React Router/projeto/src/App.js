import "./App.css";
// pacotes do React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
//components
import Navbar from "./components/Navbar";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      {/*02 links com react router */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           {/*nested route*/}
           <Route path="/products/:id/info" element={<Info />} />
          {/*rota dinamica */}
          <Route path="/products/:id" element={<Product />} />
          {/*no match route8*/}
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
