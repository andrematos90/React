import React, { useState } from 'react'
import './Form.css'

const Form = ({user}) => {

  /*06 - controlled inputs, obs: faz com que o campo venha pré preenchido*/

// Estado para name e email
/*03 - gerenciamento de dados de input */
const [name, setName] = useState(user ? user.name : "");
const [email, setEmail] = useState(user ? user.email : "");


// Função para lidar com a mudança do input de nome
const handleName = (e) =>{
  setName(e.target.value);

  console.log(name)
  console.log(email)
  }


  // Função para lidar com a submissão do formulário
  const handleSubmit = (e) =>{
    e.preventDefault(); /*evita que a página seja recarregada ao enviar o formulário */
    console.log("Enviando Formulário");

    {/*07 resetando formulário */}
    setName("");
    setEmail("");
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