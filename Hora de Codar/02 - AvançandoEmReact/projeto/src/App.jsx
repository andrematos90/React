
import './App.css';
import BandeiraSantaCatarina from '../src/assets/Bandeira Santa Catarina.png';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';


function App() {
  
  return (
    
    <div>
      <div>
      {/*adicionando imagem da pasta public */}
      <img src="Bandeira_do_Rio_Grande_do_Sul.svg.webp" alt="Bandeira Rio Grandense do Sul" />

      {/*adicionando imagem da pastas assets*/}
      <img src={BandeiraSantaCatarina} alt="Bandeira do Estado de Santa Catarina" />

    </div>
    <div>
      <ManageData></ManageData>
      <ListRender></ListRender>
    </div>
    </div>
       
  )
}

export default App
