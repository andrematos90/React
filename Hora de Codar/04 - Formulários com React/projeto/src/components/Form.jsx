import React, { useState } from 'react'
import './Form.css'

const Form = ({user}) => {

  /*06 - controlled inputs, obs: faz com que o campo venha pré preenchido*/

// Estado para name e email
/*03 - gerenciamento de dados de input */
const [name, setName] = useState(user ? user.name : "");
const [email, setEmail] = useState(user ? user.email : "");


/*08 - textarea */
const [bio, setBio] = useState("");


// Função para lidar com a mudança do input de nome
const handleName = (e) =>{
  setName(e.target.value);

  //console.log(name)
  //console.log(email)
  }


  // Função para lidar com a submissão do formulário
  const handleSubmit = (e) =>{
    e.preventDefault(); /*evita que a página seja recarregada ao enviar o formulário */
    console.log("Enviando Formulário");
    console.log(name, email. bio)
 


    {/*07 resetando formulário */}
    setName("");
    setEmail("");
    setBio("");
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
            
            {/*08 - textarea */}
           <label>
            <span>Bio:</span>
            <textarea name="bio" placeholder='Escreva sua bio..' onChange={(e)=>{setBio(e.target.value)}} value={bio}></textarea>
           </label>

        </div>
        <input type="submit" value="Enviar"/>
    </form>
    </>
  )
}

export default Form