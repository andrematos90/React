import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import FirstComponent from './components/FirstComponent'   

export function App() {


  return (
   <div>
    <h1>Componente principal</h1>
    <FirstComponent/>
   </div>
  )
}
