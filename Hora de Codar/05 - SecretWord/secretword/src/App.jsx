//React hooks
import { useState, useCallback, useEffect } from "react";
//css
import "./App.css";
//dados
import { wordsList } from "./data/words";
//componentes
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

//estagios  "pagina" do jogo
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  {
    /*define a página inicial do projeto como "start" */
  }
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  {
    /*variável da palavra a ser descoberta no jogo*/
  }
  const [pickedCategory, setPickedCategory] = useState("");
  {
    /*categoria*/
  }
  const [letters, setLetters] = useState([]);
  {
    /*letra escolhida pelo jogador */
  }

  const [guessedLetters, setGuessedLetters] = useState([]);
  {
    /*variável com a quantidade de letras adivinhadas */
  }
  const [wrongLetter, setWrongLetters] = useState([]);
  {
    /*variável com a quantidade de letras erradas */
  }
  const [guesses, setGuesses] = useState(3);
  {
    /*variável com a quantidade de tentativas restantes */
  }
  const [score, setScore] = useState(0);
  {
    /*variável com a pontuação */
  }

  //função que sorteia uma categoria e uma palavra
  const pickedWordAndCategory = () => {
    //sorteio da categoria
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);

    //sorteio de uma palavra da categoria
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  //iniciando jogo
  const startGame = () => {
    //chama a função que retorna a categoria e a letra da vez
    const { word, category } = pickedWordAndCategory();

    //cria um array de letras
    let wordletters = word.split(""); // cria uma lista com as letras
    wordletters = wordletters.map((l) => l.toLowerCase()); // faz com que a inicial fique minuscula
    console.log(wordletters);

    //seta os estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordletters);

    setGameStage(stages[1].name);
  };

  //processando a letra
  const verifyLetter = (letter) => {
    console.log(letter);
  };

  //iniciando jogo novamente
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <>
      <div className="App">
        {/*quanado a variável "gameStage tiver valor "start" o componente StarScreen é renderizado */}
        {gameStage === "start" && <StartScreen startGame={startGame} />}

        {/*quanado a variável "gameStage tiver valor "game" o componente Game é renderizado */}
        {gameStage === "game" && (
          <Game
            verifyLetter={verifyLetter}
            pickedWord={pickedWord} 
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters = {wrongLetter}
            guesses = { guesses}
            score = {score}
          />
        )}

        {/*quanado a variável "gameStage tiver valor "end" o componente GameOVer é renderizado */}
        {gameStage === "end" && <GameOver retry={retry} />}
      </div>
    </>
  );
}

export default App;
