import Altura from './components/altura/Altura'
import Peso from './components/peso/Peso'
import Calculo from './components/calculo/Calculo';

import { useState } from 'react';


function App() {

  const [altura, setAltura]=useState();
  const [peso, setPeso]=useState();
  const [showCalculo, setShowCalculo] = useState(false);

  return (
    <>
     <Altura altura={altura} setAltura={setAltura}/>
     <Peso peso={peso} setPeso={setPeso}/>
     <br />
    

     <button onClick={() => setShowCalculo(true)}>Calcular IMC</button>
     {showCalculo && <Calculo altura={altura} peso={peso} />}
    </>
  )
}

export default App
