//router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


//context
import { AuthProvider} from "./context/AuthContext";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'

//components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
     <AuthProvider>
     <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
     </AuthProvider>
    </>
  );
}

export default App;
