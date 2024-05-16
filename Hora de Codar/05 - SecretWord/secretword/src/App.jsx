//React hooks
import { useState, useCallback, useEffect } from 'react'
//css
import './App.css'
//dados
import {wordsList} from './data/words'
//componentes
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'


//estagios  "pagina" do jogo
const stages  = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]



function App() {

  const [gameStage, setGameStage] = useState(stages[0].name); {/*define a página inicial do projeto como "start" */}
  const [words] = useState(wordsList) 
  

  //iniciando jogo
  const startGame = () =>{
    setGameStage(stages[1].name);
  };


  //processando a letra
  const verifyLetter = () =>{
    setGameStage(stages[2].name);
 
  }

  //iniciando jogo novamente
  const retry = () =>{
    setGameStage(stages[0].name)
  }

  return (
    <>
    <div className='App'>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}      {/*quanado a variável "gameStage tiver valor "start" o componente StarScreen é renderizado */}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}         {/*quanado a variável "gameStage tiver valor "game" o componente Game é renderizado */}
      {gameStage === 'end' && <GameOver retry={retry}/>}      {/*quanado a variável "gameStage tiver valor "end" o componente GameOVer é renderizado */}  
    </div>
     
    </>
  )
}

export default App
