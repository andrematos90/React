import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  
  const n = 9

  const [name] = useState('André');

  return (
    <>

    {/*css global */}
    <h1>CSS no React</h1>

    
    {/*css do componente*/}
     <p>css do componente</p>

     <p style={{color: 'green', backgroundColor: 'black'}}>a estilizção dessa tag é inline</p>

     {/*css inline dinamico*/}
    <h2 style={n < 10 ? {backgroundColor: "blue", color: 'white'} : {backgroundColor: "yellow"}}>CSS Dinamico</h2>

    {name == "André" ? (<p style={{backgroundColor :  'blue', color: 'white'}}>Usuário {name} Liberado!</p>) : (<p style={{backgroundColor: 'red'}}>Usuário negado!</p>) }

     <MyComponent/>
    </>
  )
}

export default App
