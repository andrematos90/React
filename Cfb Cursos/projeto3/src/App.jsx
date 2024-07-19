import Result from "./components/result/Result";
import Note from "./components/note/Note";

import "./App.css";
import { useState } from "react";

function App() {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [nota4, setNota4] = useState(0);
  const [nota5, setNota5] = useState(0);

  return (
    <>
    <h1>Soma de notas</h1>
      <Note num={1} nota={nota1} setNota={setNota1}/>
      <Note num={2} nota={nota2} setNota={setNota2}/>
      <Note num={3} nota={nota3} setNota={setNota3}/>
      <Note num={4} nota={nota4} setNota={setNota4}/> 
      <Note num={5} nota={nota5} setNota={setNota5}/>

      <Result  somaNotas={parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) }/>
    </>
  );
}

export default App;
