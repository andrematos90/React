
import './App.css';
import BandeiraSantaCatarina from '../src/assets/Bandeira Santa Catarina.png';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import PreviousState from './components/PreviousState';
import  Fragment  from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';


function App() {

  function showMessage(){
    console.log("Evento do componente pai");
  }

  const userName = "André"
  
  return (
    
    <div>
      <div>
      {/*adicionando imagem da pasta public */}
      <img src="Bandeira_do_Rio_Grande_do_Sul.svg.webp" alt="Bandeira Rio Grandense do Sul" />

      {/*adicionando imagem da pastas assets*/}
      <img src={BandeiraSantaCatarina} alt="Bandeira do Estado de Santa Catarina" />

    </div>
    <div>
      <ManageData/>
      <ListRender/>
      <PreviousState/>
      <ConditionalRender/>
      <ShowUserName userName = {userName} />
      <Fragment propFragment="teste"/>
      <Container myValue="valor passado como prop">
        <p>Conteudo enviado para o componentes através de children prop</p>
      </Container>
      <ExecuteFunction myFunction={showMessage}/>
    </div>
    </div>
       
  )
}

export default App
