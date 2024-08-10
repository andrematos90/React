import { useState } from 'react'

import './App.css'
import Formulario from './components/Formulario';
import Exibicao from './components/Exibicao';

function App() {
  const[nome, setNome]=useState();
  const[email, setEmail]=useState();
  const[idade, setIdade]=useState();
  const[profissao, setProfissao]=useState();
  const[descricao, setDescricao]=useState();
  const[dadosSubmetidos, setDadosSubmetidos]=useState(null);

  const handleSubmit = (e)=>{

    //função que impede a atualização da página ao clicar em enviar
    e.preventDefault();

    //função que "junta" os dados para enviar
    setDadosSubmetidos(
      {
        nome,
        email,
        idade,
        profissao,
        descricao,
        
      }
    )

    //limpa os campos após enviar
    setNome("");
    setEmail("");
    setIdade("");
    setProfissao("");
    setDescricao("")
  };

  return (
    <>
    <Formulario
    nome={nome}
    setNome={setNome}
    email={email}
    setEmail={setEmail}
    idade={idade}
    setIdade={setIdade}
    profissao={profissao}
    setProfissao={setProfissao}
    descricao={descricao}
    setDescricao={setDescricao}
    onSubmit={handleSubmit}
    />

    <h1>Dados Inseridos:</h1>
    {/*Passa os dados para o componente que exibe*/}
    {dadosSubmetidos && <Exibicao dados={dadosSubmetidos}/>}
      
    </>
  )
}

export default App
