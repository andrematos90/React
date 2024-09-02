// Importa a função useContext do React, que permite consumir um contexto dentro de um componente funcional.
import { useContext } from "react";

// Importa o contexto CounterContext de um arquivo específico, que é utilizado para gerenciar o estado do contador em toda a aplicação.
import { CounterContext } from "../context/CounterContext";

// Define o componente funcional ChangeCounter.
const ChangeCounter = () => {

    // Usa o hook useContext para acessar o valor atual do contexto CounterContext.
    // Aqui, estamos extraindo as propriedades 'counter' (valor do contador) e 'setCounter' (função para atualizar o valor do contador) do contexto.
    const { counter, setCounter } = useContext(CounterContext);

    return (
        <div>
            {/* Renderiza um botão que, ao ser clicado, incrementa o valor do contador em 1.
                A função setCounter é chamada para atualizar o valor do contador no contexto. */}
            <button onClick={() => setCounter(counter + 1)}>Add Valor</button>
        </div>
    );
}

// Exporta o componente ChangeCounter para que possa ser utilizado em outras partes da aplicação.
export default ChangeCounter;
