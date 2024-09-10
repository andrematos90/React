//css
import styles from "./Register.module.css";

//hooks
import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe sias histórias</p>
      <form>
        <label>
          <span>Nome:</span>
          <input 
          type="text"
          name="dispayName"
          required
          placeholder="Nome do Usuário" />
        </label>
        <label>
          <span>E-mail:</span>
          <input 
          type="email"
          name="email"
          required
          placeholder="Email do Usuário" />
        </label>
        <label>
          <span>Senha:</span>
          <input 
          type="password"
          name="password"
          required
          placeholder="Insira uma senha" />
        </label>
        <label>
          <span>Confirmação de Senha:</span>
          <input 
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirme a senha" />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
