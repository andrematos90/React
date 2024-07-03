import { useState } from 'react'


function App() {
 

  {/*uso do método map */}
  const carros = ["Twingo", "Fusca", "Malibu", "Civic", "Gol"];


   {/*manipulando formulários */}
   const [nome, setNome] = useState();


   const handleChangeName = (e) =>{
    setNome(e.target.value);

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
      <input type="text" name='nome' value={nome}  onChange={(e)=>handleChangeName(e)}/>
     
    </form>


    <h1>Nome:</h1> <p>{nome}</p>

      
    </>
  )
}


export default App
