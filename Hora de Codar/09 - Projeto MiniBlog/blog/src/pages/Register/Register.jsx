import styles from './../Register/Register.module.css'

const Register = () => {
  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usúario e compartilhes histórias</p>
      <form>
        <label>
        <span> <i>Nome:</i></span>
          <input 
          type="text"
          name='displayName'
          required
          placeholder='Nome do usuário' />
        </label>
        <label>
         <span><i>Email:</i></span>
          <input 
          type="email"
          name='email'
          required
          placeholder='E-mail do usuário' />
        </label>
        <label>
          <span><i>Senha:</i></span>
          <input
           type="password"
          name='password'
          required
          placeholder='Senha do usuário' />
        </label>
        <label>
          <span><i>Confirme sua Senha:</i></span>
          <input
           type="confirmpassword"
          name='confirmpassword'
          required
          placeholder='Senha do usuário' />
        </label>
        <button className='btn'>Cadastrar</button>



      </form>
    </div>
  )
}

export default Register