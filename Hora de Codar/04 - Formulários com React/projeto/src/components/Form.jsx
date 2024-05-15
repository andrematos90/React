import React, { useState } from 'react'
import './Form.css'

const Form = () => {

/*03 - gerenciamento de dados de input */
const [name, setName] = useState();
const [email, setEmail] = useState();

const handleName = (e) =>{
  setName(e.target.value);

  console.log(name)
  console.log(email)
}

  return (
    <>
    {/*criação de form */}
    <form>
        <div>
          {/*01 - Criando formulário */}
            <label htmlFor="name">Nome:</label>
            <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName}/>

            {/*02 - label envolvendo input */}
            <label>
              <span>E-mail:</span>
              <input type="email" name='email' placeholder='Digite seu e-mail' onChange={(e)=>{setEmail(e.target.value)}}/>
            </label>
        </div>
        <input type="submit" value="Enviar"/>
    </form>
    </>
  )
}

export default Form