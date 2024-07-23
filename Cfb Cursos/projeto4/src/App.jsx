import MinhaClasse from './components/MinhaClaasse'
import StatesEmComponentesDeClasse from './components/StatesEmComponentsDeClasse'

function App() {
 
  return (
    <>
    <MinhaClasse atributo="atributo passado por propriedade ao componente"/>
    
    <StatesEmComponentesDeClasse fator={10}/>
     
    </>
  )
}

export default App
