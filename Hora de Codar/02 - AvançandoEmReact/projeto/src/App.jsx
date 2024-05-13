
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
import CarDetails from './components/CarDetails';


function App() {

  function showMessage(){
    console.log("Evento do componente pai");
  }

  const userName = "André"

  const cars = [
  {brand : "Renault", model : "Clio", age : 1980, newCar : false},
  {brand : "Chevrolet", model : "Malibu", age : 2010, newCar : true},
  {brand : "VW", model : "Gol", age : 2008, newCar : false},
  {brand : "Honda", model : "Civic", age : 2008, newCar : true}
  ]

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
      <CarDetails brand = "VW" model = "Fusca" age={1985} newCar = {false}/>
      {/*Reaproveitando componente CarDetails8*/}
      <CarDetails brand = "Renault" model = "Twingo" age={2001} newCar = {false}/>
      <CarDetails brand = "Citroen" model = "C5" age= {2012} newCar = {true}/>

      {/*loop em componente com array de objetos */}
      {cars.map((car) =>(
        <CarDetails brand={car.brand} color={car.model} age={car.age} newCar={car.newCar}/>
      ))}
      
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
