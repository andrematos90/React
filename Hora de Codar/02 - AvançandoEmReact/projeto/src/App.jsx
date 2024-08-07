
import './App.css';
import CitroenC5 from '../src/assets/Citroën_C5_2008.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import PreviousState from './components/PreviousState';
import  Fragment  from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import AnimalDetails  from './components/AnimalDetails';
import RenderizaLista from './components/RenderizaLista';


function App() {

  function showMessage(){
    console.log("Evento do componente pai");
  }

  const userName = "André"

  const cars = [
  {id : 1, brand : "Renault", model : "Clio", age : 1980, newCar : false},
  {id : 2, brand : "Chevrolet", model : "Malibu", age : 2010, newCar : true},
  {id : 3, brand : "VW", model : "Gol", age : 2008, newCar : false},
  {id: 4, brand : "Honda", model : "Civic", age : 2008, newCar : true}
  ]

  const animals = [
    {id : 1, name : "Binho", especie : "cachorro", idade : 3},
    {id : 2, name : "Milu", especie : "cachorro", idade : 7},
    {id : 3, name : "Luna", especie : "cachorro", idade : 1},
    {id : 4, name : "Gatão", especie : "gato", idade : 3},
  ]

  const[message, setMessage ] = useState("");
  
  const handleMessage = (msg) =>{
    setMessage(msg);
  };

  return (
    
    <div>
      <div>
      {/*adicionando imagem da pasta public */}
      <img src="Twingo Renault 2001.jpeg" alt="Twingo" />

      {/*adicionando imagem da pastas assets*/}
      <img src={CitroenC5} alt="Citroen C5" />

    </div>
    <div>
      <ManageData/>

      <ListRender/>

      <PreviousState/>
      
      <ConditionalRender/>

      <ShowUserName userName = {userName} />

      <CarDetails brand = "VW" model = "Fusca" age={1985} newCar = {false} />

      {/*Reaproveitando componente CarDetails8*/}
      <CarDetails brand = "Renault" model = "Twingo" age={2001} newCar = {false} />
      <CarDetails brand = "Citroen" model = "C5" age= {2012} newCar = {true} />

      {/*loop em componente com array de objetos */}
      {cars.map((car) =>(
        <CarDetails brand={car.brand} color={car.model} age={car.age} newCar={car.newCar} key={car.id}/>
      ))}
      
      {/*fragment*/}
      <Fragment propFragment="teste"/>

      {/*prop children*/}
      <Container myValue="valor passado como prop">
        <p>este é o conteudo</p>
      </Container>

      
      {/*função como prop */}
      <ExecuteFunction myFunction={showMessage}/>

      {/*state lift */}
      <Message msg={message}></Message>
      <ChangeMessageState handleMessage={handleMessage}/>

      {/*desafio*/}
      {animals.map((animals) =>(
        <AnimalDetails name={animals.name} especie={animals.especie} idade={animals.idade} key={animals.id}/>
      ))}

      <RenderizaLista/>

    </div>
    </div>
       
  )
}

export default App
