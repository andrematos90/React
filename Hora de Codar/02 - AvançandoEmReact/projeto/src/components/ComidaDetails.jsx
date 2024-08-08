import React from 'react'

const ComidaDetails = ({nomeDaComida, sabor, calorias, engorda}) => {
  return (
    <div>
        <h1>Nome:</h1><p>{nomeDaComida}</p>
        <h1>Sabor</h1><p>{sabor}</p>
        <h1>Calorias</h1><p>{calorias}</p>
        {<p engorda $$ >ENGORDA MUITO</p>}
 
    </div>
  )
}

export default ComidaDetails