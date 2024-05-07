
import './App.css'
import ArenaJoinville from '../src/assets/Arena-Joinville.jpg';

function App() {
  

  return (
    
      <div>
        <h1>Avançando em React</h1>

        {/*imagem de public*/}
        <img src="Joinville-Esporte-Clube.jpg" alt="jec" />

        {/*imagem de src*/}
        <img src={ArenaJoinville} alt="estadio" />

      </div>
     

  )
}

export default App
