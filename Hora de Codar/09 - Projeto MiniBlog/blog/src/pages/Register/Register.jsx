import styles from './../Register/Register.module.css'
import { useState } from 'react'

const Register = () => {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError]= useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    setError("") // zera os erros

    //criar o objeto user que recebera os valores dos inputs
    const user = { 
      displayName,
      email,
      password
    }

    if(password != confirmPassword){
      setError("As Senhas não são iguais")
      return
    }
    console.log(user)
  }


  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usúario e compartilhes histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
        <span> <i>Nome:</i></span>
          <input 
          type="text"
          name='displayName'
          required
          placeholder='Nome do usuário'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)} />
        </label>
        <label>
         <span><i>Email:</i></span>
          <input 
          type="email"
          name='email'
          required
          placeholder='E-mail do usuário'
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span><i>Senha:</i></span>
          <input
           type="password"
          name='password'
          required
          placeholder='Senha do usuário'
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          <span><i>Confirme sua Senha:</i></span>
          <input
           type="password"
          name='confirmpassword'
          required
          placeholder='Senha do usuário'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <button className='btn'>Cadastrar</button>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Register