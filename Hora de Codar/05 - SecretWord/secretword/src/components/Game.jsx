import "./Game.css";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letter,
  guessedLetters,
  wrongLetters,
  guesses,
  score,

}) => {

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
        <p>Você ainda tem {guesses} tentativas</p>
      </h3>
      <div className="wordContainer">
        {letter.map((letter, i) => 
        guessedLetters.includes(letter) ? (
          <span key={i} className="letter">
            {letter}
          </span>
        ) : (
          <span key={i} className="blankSquare"></span>
        )
        )}
        
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra: </p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar</button>
        </form>
        <div className="wrongLettersContainer">
          <p>Letras já utilizadas:</p>
         {wrongLetters.map((letter, i ) => (
          <span key={i}>{letter}, </span>
         ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
