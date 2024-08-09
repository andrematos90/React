import { useState } from 'react'

import './App.css'
import DetalhesCarros from './components/DetalhesCarros'

function App() {

  const [carros, setCarros] = useState([
    {id: 1, marca:"Renault", modelo: "Twingo", ano: 2001, cor: "prata"},
    {id: 2, marca:"Renault", modelo: "Clio", ano: 2006, cor: "cinza"},
    {id: 3, marca:"Volwswagen", modelo: "Fusca", ano: 1985, cor: "branca"},
    {id: 4, marca:"Volwswagen", modelo: "Gol", ano: 2008, cor: "preta"},
    {id: 5, marca:"Volwswagen", modelo: "Saveiro", ano: 2017, cor: "branca"},
    {id: 6, marca:"Volwswagen", modelo: "Fox", ano: 2014, cor: "branca"},
    {id: 7, marca:"Chevrolt", modelo: "Malibu", ano: 2010, cor: "prata"},
    {id: 8, marca:"Honda", modelo: "New Civic", ano: 2008, cor: "cinza"}

  ])

  return (
    <>
    <h1>Carros</h1>

    {carros.map((carro)=>(
      <DetalhesCarros 
      marca={carro.marca}
      modelo={carro.modelo}
      ano={carro.ano}
      cor={carro.cor}
      key={carro.id}/>
    ))}
   
    </>
  )
}

export default App
