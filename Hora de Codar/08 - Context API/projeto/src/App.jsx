import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contatcs';

import NavBar from './components/NavBar'

function App() {
  

  return (
    <>
    <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
    </BrowserRouter>
    </div>
     
    </>
  )
}

export default App
