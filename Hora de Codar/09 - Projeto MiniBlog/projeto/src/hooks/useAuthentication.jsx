import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //cleanup
  //deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfCancelled() {
    if (cancelled) {
      return;
    }
  }

  //register
  const createUser = async (data) => {
    checkIfCancelled();

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.datadisplayName,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "Senha fraca!";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "Email já cadastrado!";
      } else {
        systemErrorMessage = "Houve um erro,  tenta mais tarde!";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  //logout
  const logout = () => {
    checkIfCancelled();
    signOut(auth);
  };

  //login - sign in

  const login = async(data)  =>{
    
    checkIfCancelled();
    setLoading(true);
    setError(false);

    try{
      
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);

    }catch(error){
      let systemErrorMessage;

      if (error.code === "auth/user-not-found") {
        systemErrorMessage = "O usuário não existe!";
      }else if(error.code === "auth/wrong-password"){
        systemErrorMessage = "Senha incorreta!"
      }else{
        systemErrorMessage = "Houve um erro tente mais tarde"
      }

      console.log(error.code)

      setError(systemErrorMessage);
      setLoading(false);
    }
   
  }

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login
  };
};
