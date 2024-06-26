import './App.css'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {

  const rocket = 'Falcon 9';
  const company = 'SpaceX';
 

  return (
    <>
    <Header/>
    <Home msg={"Olá React!"} nome={"Binzão"} rocket ={rocket} empresa = {company}/>
    <Footer/>
    </>
  )
}

export default App
