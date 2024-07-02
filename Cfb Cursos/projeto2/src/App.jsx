import { useState } from 'react'


function App() {
 
  const carros = ["Twingo", "Fusca", "Malibu", "Civic", "Gol"];



  return (
    <>
    <ul>{carros.map((carro, index) =>(
      <li>{carro}</li>
    ))}</ul>
      
    </>
  )
}

export default App
