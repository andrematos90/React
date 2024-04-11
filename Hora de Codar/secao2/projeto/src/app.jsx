import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
//componentes//
import FirstComponent from './components/FirstComponent'   
import TemplateExpressions from './components/TemplateExpressions';

export function App() {


  return (
   <div>
    <h1>Componente principal</h1>
    <FirstComponent/>
    <TemplateExpressions/>
    
   </div>
  )
}
