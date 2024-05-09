
import './App.css';
import BandeiraSantaCatarina from '../src/assets/Bandeira Santa Catarina.png';


function App() {
  
  return (
    <div>
      {/*adicionando imagem da pasta public */}
      <img src="Bandeira_do_Rio_Grande_do_Sul.svg.webp" alt="Bandeira Rio Grandense do Sul" />

      {/*adicionando imagem da pastas assets*/}
      <img src={BandeiraSantaCatarina} alt="Bandeira do Estado de Santa Catarina" />

    </div>
       
  )
}

export default App
