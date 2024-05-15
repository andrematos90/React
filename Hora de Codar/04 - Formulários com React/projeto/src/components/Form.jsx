import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <>
    {/*criação de form */}
    <form>
        <div>
          {/*01 - Criando formulário */}
            <label htmlFor="name">Nome:</label>
            <input type="text" name='name' placeholder='Digite seu nome'/>

            {/*02 - label envolvendo input */}
            <label>
              <span>E-mail:</span>
              <input type="email" name='email' placeholder='Digite seu e-mail'/>
            </label>
        </div>
        <input type="submit" value="Enviar"/>
    </form>
    </>
  )
}

export default Form