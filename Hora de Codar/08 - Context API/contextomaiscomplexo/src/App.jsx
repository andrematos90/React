import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './component/NavBar';

function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        </BrowserRouter>
       
      </div>
     
    </>
  )
}

export default App;
