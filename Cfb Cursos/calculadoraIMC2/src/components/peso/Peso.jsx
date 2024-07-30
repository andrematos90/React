import React from 'react'

const Peso = ({peso, setPeso}) => {
  return (
    <div>
        <label>Peso</label>
        <input type="text" value={peso} onChange={(e)=>{setPeso(e.target.value)}}/>
    </div>
  )
}

export default Peso