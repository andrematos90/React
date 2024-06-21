//faz a difenciação do usuario autenticado ou não

import { useContext, createContext } from "react";

const AuthContext = createContext();

//fução que é provedor de contexto
export function AuthProvider({children, value}){
    return<AuthContext.Provider value ={value}>{children}</AuthContext.Provider>;
}

export function useAuthValue(){
    return useContext(AuthContext);
}