import { useState } from 'react'
import './App.css'
import CarDetails from './components/CarDetails'


function App() {
  const [count, setCount] = useState(0)

  const cars =[
    {id : 1,  model : "Twingo", brand : "Renault", age : 2001 },
    {id : 2,  model : "Civic", brand : "Honda", age : 2008 },
    {id : 3,  model : "Malibu", brand : "Chevrolet", age : 2010 },
    {id : 4,  model : "Fusca", brand : "Volkswagen", age : 1985 },
    {id : 5,  model : "Gol", brand : "Volkswagen", age : 2008 }
  ]

  return (
    <>
    <h1>Automóveis</h1>
    {cars.map((car) => (
      <CarDetails model = {car.model} brand = {car.brand} age = {car.age} key={car.id}/>
    ))}
    
    </>
  )
}

export default App
