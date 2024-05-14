import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1>CSS no React</h1>

     <p>meu componente App.jsx</p>

     <p style={{color: 'green', backgroundColor: 'black'}}>a estilizção dessa tag é inline</p>

     <MyComponent/>
    </>
  )
}

export default App
