// Importa o React para poder utilizar JSX e outras funcionalidades do React.
import React from 'react';

// Importa a função useContext do React, que permite consumir um contexto dentro de um componente funcional.
import { useContext } from 'react';

// Importa o contexto CounterContext de um arquivo específico, que provavelmente é utilizado para gerenciar o estado do contador em toda a aplicação.
import { CounterContext } from './../context/CounterContext';

// Importa o componente ChangeCounter, que provavelmente é responsável por alterar o valor do contador.
import ChangeCounter from '../components/ChangeCounter';

// Define o componente funcional Home.
const Home = () => {

  // Usa o hook useContext para acessar o valor atual do contexto CounterContext.
  // Aqui, estamos extraindo a propriedade 'counter' do contexto.
  const { counter } = useContext(CounterContext);

  // Retorna o JSX que será renderizado na tela.
  // O JSX inclui um título, um parágrafo que exibe o valor do contador e o componente ChangeCounter.
  return (
    <div>
      <h1>Home</h1>
      <p>Valor Passado: {counter}</p>

      {/* Renderiza o componente ChangeCounter, que provavelmente permite ao usuário modificar o valor do contador */}
      <ChangeCounter />
    </div>
  )
}

// Exporta o componente Home para que possa ser utilizado em outras partes da aplicação.
export default Home;
