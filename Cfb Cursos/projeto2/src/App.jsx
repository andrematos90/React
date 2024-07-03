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

      
    </>
  )
}


export default App
