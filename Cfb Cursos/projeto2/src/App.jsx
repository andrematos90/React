import { useState } from 'react'


function App() {
 

  {/*uso do método map */}
  const carros = ["Twingo", "Fusca", "Malibu", "Civic", "Gol"];


   {/*manipulando formulários */}
   const [nome, setNome] = useState();


   const handleChangeName = (evento) =>{
    setNome(evento.target.value);

   }


   const [empresa, setEmpresa] = useState('');

   const[form, setForm] = useState({nome:"", sobrenome:"", profissao:""})


   const handleFormChange= (e) =>{
    if(e.target.getAttribute('name') == 'fnome'){
      setForm({"nome":e.target.value, "curso" :form.curso, "ano":form.ano})
    }else if(e.targe.getAttribute('name') == 'fcurso'){
      setForm({"nome": form.nome,"curso":e.target.value, "ano":form.ano})
    }else if(e.target.getAttribute('name')=='fano'){
      setForm({"nome":form.nome, "curso":form.curso, "ano":e.target.value})
    }
   }


  return (
    <>

    {/*uso do método map */}
    <ul>{carros.map((carro, index) =>(
      <li >{carro}</li>
    ))}</ul>

    <br />

   {/*manipulando formulários */}
    <form>
      <label>Digite seu nome</label>
      <input type="text" name='nome' value={nome}  onChange={(evento)=>handleChangeName(evento)}/>
     
    </form>


    <h1>Nome:</h1> <p>{nome}</p>
    <br />


    <label>Selecione uma empresa</label>
    <select value={empresa} onChange={(evento)=>setEmpresa(evento.target.value)}>
      <option value="Petrobras">Petrobras</option>
      <option value="SpaceX">SpaceX</option>
      <option value="Embraer">Embraer</option>
      <option value="Amazon">Amazon</option>
      <option value="Vale">Vale</option>
    </select>



    <h1>empresa selecionada:{empresa}</h1>


    <label>Nome:
      <input type="text" name='fnome' value={form.nome} onChange={(e)=>handleFormChange(e)}/>
    </label>

    <label>Sobrenome:
      <input type="text" name='fnome' value={form.sobrenome} onChange={(e)=>handleFormChange(e)}/>
    </label>

    <label>Profissão:
      <input type="text" name='fnome' value={form.profissao} onChange={(e)=>handleFormChange(e)}/>
    </label>

      <h1>{form.nome}</h1>
      <h1>{form.sobrenome}</h1>
      <h1>{form.profissao}</h1>
    </>
  )
}


export default App
