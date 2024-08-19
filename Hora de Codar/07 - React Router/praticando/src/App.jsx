
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'

function App() {
  

  return (
    <>
    <h1>Está parte aparece em todas as páginas</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
