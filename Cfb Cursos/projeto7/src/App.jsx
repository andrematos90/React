import { useState } from 'react'
import VariaveisGlobais from './components/VariaveisGlobais'

function App() {
  const [explicacao, setExplicacao] = useState(VariaveisGlobais.explicacao);
  const [mostra, setMostra]=useState(false);


const verExplicacao=()=>{
 setMostra(true)
  
}

const gravar=()=>{
  VariaveisGlobais.explicacao = explicacao;
}

  return (
    <>
    <b>Nome:</b> <p>{VariaveisGlobais.nome}</p>
    <b>Raça:</b> <p>{VariaveisGlobais.raca}</p>
    <b>Pelagem:</b><p>{VariaveisGlobais.pelo}</p><br />


    
    <p>{mostra ? explicacao: " "}</p>
    <button onClick={()=>{verExplicacao()}}>Ver Explicação</button>     <br />

    <input type="text" size='100' value={explicacao} onChange={(e)=>{setExplicacao(e.target.value)}}/>
    <button onClick={()=>{gravar()}}>Gravar</button>
    </>
  )
}

export default App
