//css
import styles from './Login.module.css'


//hooks
import { useState, useEffect } from "react";

import { useAuthentication } from "../../hooks/useAuthentication"


const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {createUser, error:AuthError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");

  const user = {

    displayName,
    email,
    password
  }

  

  const res = await createUser(user);

  console.log(res);


  }
  return (
    <div className={styles.login}>
       <h1>Entrar</h1>
      <p>Faça login para utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        
        <label>
          <span>E-mail:</span>
          <input 
          type="email"
          name="email"
          required
          placeholder="Email do Usuário"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}} />
        </label>
        <label>
          <span>Senha:</span>
          <input 
          type="password"
          name="password"
          required
          placeholder="Insira uma senha"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}} />
        </label>

        {!loading && <button className="btn">Fazer Login</button>}
        {loading && <button className="btn" disabled>Aguarde</button>}
        {error && <p className="error">{error}</p>}
        {AuthError && <p className="error">{AuthError}</p>}
       
      </form>
    </div>
  )
}

export default Login