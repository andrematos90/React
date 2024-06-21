import "./App.css";

//router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//firebase
import { onAuthStateChanged } from "firebase/auth";

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

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

  //states
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUSer = user === undefined;


  useEffect(()=>{
    onAuthStateChanged(auth, (user) =>{
      setUser(user)
    })
  })

  if(loadingUSer){
    return <p>Carregando...</p>
  };


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
