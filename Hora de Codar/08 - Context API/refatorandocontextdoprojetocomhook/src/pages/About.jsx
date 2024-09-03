import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContex'

const About = () => {

  const {counter} = useContext(CounterContext);

  return (
    <div>
      <h1>About</h1>
      <p>valor: {counter}</p>
    </div>
  )
}

export default About;