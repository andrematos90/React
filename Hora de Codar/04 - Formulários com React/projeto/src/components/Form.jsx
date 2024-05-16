import React, { useState } from 'react'
import './Form.css'

const Form = ({user}) => {

  /*06 - controlled inputs, obs: faz com que o campo venha pré preenchido*/

/*03 - gerenciamento de dados de input */
const [name, setName] = useState(user ? user.name : '');
const [email, setEmail] = useState(user ? user.email : '');

const handleName = (e) =>{
  setName(e.target.value);

  console.log(name)
  console.log(email)
  }

  const handleSubmit = (e) =>{
    e.preventeDefault(); /*evita que a página seja recarregada ao enviar o formulário */
    console.log("Enviando Formulário");
};

  return (
    <>
    {/*criação de form */}
    <form onSubmit={handleSubmit}>
        <div>
          {/*01 - Criando formulário */}
            <label htmlFor="name">Nome:</label>
            <input value={name} type="text" name='name' placeholder='Digite seu nome' onChange={handleName}/>

            {/*02 - label envolvendo input */}
            <label>
              <span>E-mail:</span>
              <input value={email} name='email' placeholder='Digite seu e-mail' onChange={(e)=>{setEmail(e.target.value)}}/> {/*alteração state inline */}
            </label>
        </div>
        <input type="submit" value="Enviar"/>
    </form>
    </>
  )
}

export default Form