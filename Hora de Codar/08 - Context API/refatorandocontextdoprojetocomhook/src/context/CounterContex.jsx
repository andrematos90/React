import { createContext, useState } from "react";

//criando contexto
export const CounterContext = createContext();

//criando provider
export const CounterContextProvider = ({children}) => {

    const [counter, setCounter] = useState(10);

    return(
        
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}