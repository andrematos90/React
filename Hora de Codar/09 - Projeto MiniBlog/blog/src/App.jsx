import "./App.css";

//router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
