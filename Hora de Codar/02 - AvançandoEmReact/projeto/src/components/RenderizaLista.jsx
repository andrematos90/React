import React, {useState} from 'react'

const RenderizaLista = () => {

    const[animais] = useState([
        {id: 0, nome : "Simba"},
        {id: 1, nome : "Milu"},
        {id: 2,nome : "Luna"}
    ])
  return (
    <div>
        <h1>Lista:</h1>
        <ul>
            {animais.map((n)=>(
                <li key={n.id}>{n.nome}</li>
            ))}
        </ul>
    </div>
  )
}

export default RenderizaLista