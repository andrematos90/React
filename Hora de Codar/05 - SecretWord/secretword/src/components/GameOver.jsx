

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>Fim do Jogo!</h1>
      <h2>Pontuação: {score}</h2>
      <button onClick={retry}>Jogar Novamente</button>
    </div>
  )
}

export default GameOver