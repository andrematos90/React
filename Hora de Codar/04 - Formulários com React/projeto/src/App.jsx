import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
 

  return (
    <>
    <h1>Formulário</h1>
      <Form user={{name: "Binzão", email:"binho@gmail.com"}}></Form>
    </>
  )
}

export default App
