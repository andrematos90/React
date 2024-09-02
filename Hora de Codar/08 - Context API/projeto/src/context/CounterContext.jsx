// Importa a função createContext do React, que é usada para criar um novo contexto.
// Também importa o hook useState, que é utilizado para gerenciar o estado dentro de componentes funcionais.
import { createContext, useState } from "react";

// Cria um novo contexto chamado CounterContext, que pode ser usado para compartilhar o estado do contador
// e sua função de atualização (setCounter) entre componentes da aplicação.
export const CounterContext = createContext();

// Define um componente funcional chamado CounterContextProvider, que servirá como o provedor do contexto.
// Este componente envolverá outros componentes da aplicação e fornecerá o estado e a função de atualização do contador a eles.
export const CounterContextProvider = ({ children }) => {

    // Usa o hook useState para criar o estado 'counter' e a função 'setCounter' para atualizá-lo.
    // O estado 'counter' é inicializado com o valor 5.
    const [counter, setCounter] = useState(5);

    // Retorna o provedor do contexto, que envolve os componentes filhos (children).
    // O valor fornecido ao contexto inclui tanto o valor do contador quanto a função para atualizá-lo.
    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    );
};
