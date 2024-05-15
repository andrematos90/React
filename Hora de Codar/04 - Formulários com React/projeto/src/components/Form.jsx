import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <>
    {/*criação de form */}
    <form>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name='name' placeholder='Digite seu nome'/>
        </div>
        <input type="submit" value="Enviar"/>
    </form>
    </>
  )
}

export default Form