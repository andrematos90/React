import "./App.css";

//router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//context
import { AuthProvider } from "./context/AuthContext";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"


//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Register" element={<Register/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
       
      </div>
    </>
  );
}

export default App;
