import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About"
import ChangeCounter from "./components/ChangeCounter";


function App() {
  

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>     
    </Routes>
    </BrowserRouter>

    <ChangeCounter></ChangeCounter>
    </>
  )
}

export default App;
