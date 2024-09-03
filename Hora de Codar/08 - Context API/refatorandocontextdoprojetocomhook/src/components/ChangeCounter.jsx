import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContex'

const ChangeCounter = () => {

    const {counter, setCounter} = useContext(CounterContext);

  return (
    <div>
        <button onClick={()=> setCounter(counter + 10)}>Soma 10</button>
    </div>
  )
}

export default ChangeCounter