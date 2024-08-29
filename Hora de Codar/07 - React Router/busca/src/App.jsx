import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import Search from './pages/Search'

function App() {
  

  return (
    <>
     <div>
      <BrowserRouter>
      <NavBar/>
      <SearchForm/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/search' element={<Search/>}/>
      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
