import Result from "./components/result/Result";
import Note from "./components/note/Note";

import "./App.css";
import { useState, useEffect } from "react";
import Frase from "./components/frase/Frase";
import Exemplo from "./components/exemplo/Exemplo";

function App() {
  //elevação de state
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [nota4, setNota4] = useState(0);
  const [nota5, setNota5] = useState(0);

  //uso do useEffect
  const [numero, setNumero] = useState(0);

  useEffect(() =>
    console.log("useEffect é chamado quando a página é carregada ou alterada")
  );

  const conta = () => {
    setNumero(numero + 1);
  };

  //LocalStorage
  const [nome, setNome] = useState()

  const save = (chave, valor)=>{
    localStorage.setItem(chave, valor)
  }

  const search = (chave) =>{
    alert(localStorage.getItem(chave))
  }

  const del = (chave) =>{
    localStorage.removeItem(chave)
  }

  return (
    <>
      {/*elevação de state */}
      <h1>Soma de notas</h1>
      <Note num={1} nota={nota1} setNota={setNota1} />
      <Note num={2} nota={nota2} setNota={setNota2} />
      <Note num={3} nota={nota3} setNota={setNota3} />
      <Note num={4} nota={nota4} setNota={setNota4} />
      <Note num={5} nota={nota5} setNota={setNota5} />

      <Result
        somaNotas={
          parseFloat(nota1) +
          parseFloat(nota2) +
          parseFloat(nota3) +
          parseFloat(nota4) +
          parseFloat(nota5)
        }
      />

      <button onClick={conta}>+1</button>

      <h1>{numero}</h1>

      {/*contenção */}
      <Frase expl="essa frase esta sendo passada por parametros e acessada no componente através de props">
        <h1>este h1 esta sendo passado através de prop children</h1>
        <h2>este h2 tambem</h2>
        <h3>
          este h3 não vai aparecer pq no componente "Frase" não foi utilizado
        </h3>

        <Exemplo />
      </Frase>

      {/*LocalStorage */}
      <label>Digite um nome</label>
      <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
      <button onClick={()=>save('ls_nome', nome)}>Save</button>
      <button onClick={()=>search('ls_nome')}>View Name</button>
      <button onClick={()=>del('ls_nome')}>Delete</button>



    </>
  );
}

export default App;
