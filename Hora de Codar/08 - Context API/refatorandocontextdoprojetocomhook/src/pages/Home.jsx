import React from 'react'

//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContex'

import { useCounterContext } from '../hooks/useCounterContext'

const Home = () => {

  //const {counter} = useContext(CounterContext)

  const  {counter} = useCounterContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Valor: {counter}</p>
    </div>
  )
}

export default Home