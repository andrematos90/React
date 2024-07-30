import React from 'react'

const Altura = ({altura, setAltura}) => {
  return (
    <div>
        <label>Altura</label>
        <input type="text" value={altura} onChange={(e)=>{setAltura(e.target.value)}}/>
    </div>
  )
}

export default Altura