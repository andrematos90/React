import React from 'react'

const Frase = (props) => {
  return (
    <div>
        <p>
        Não te mandei Eu? Esforça-te, e tem bom ânimo; não te atemorizes, nem te espantes; porque Jeová teu Deus está contigo, por onde quer que andares.
        </p>

        <p>{props.expl}</p>
        <p>{props.children[0]}</p>
        <p>{props.children[1]}</p>
        <p>{props.children[3]}</p>


    </div>
  )
}

export default Frase