import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About'
import Pagina404 from './pages/Pagina404'

function App() {
  
  return (
    <>
    <div>
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Pagina404/>}/>
      </Routes>
      </BrowserRouter>

    </div>
    </>
  )
}

export default App
