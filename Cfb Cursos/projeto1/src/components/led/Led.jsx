import React from 'react'
import GreenLed from './../../assets/images/green.jpg'
import RedLed from './../../assets/images/red.jpg'

const led = (props) => {
  return (
    <div>
        <img src={props.ligado ? GreenLed : RedLed} alt="led" />
        <button onClick={()=>{props.setLigado(!props.ligado)}}>{props.ligado? 'Desligar' : 'Ligar'}</button>

    </div>
  )
}

export default led