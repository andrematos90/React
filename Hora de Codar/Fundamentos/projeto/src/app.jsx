import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
//componentes//
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpressions'
import ParentComponent from './components/ParentComponent'
import Events from './components/Events'


export function App() {


  return (
   <div>
    <h1 className='english'>Hello World!</h1> 
    <h1 className='portuguese'>Olá Mundo!</h1>  

    <div className='components'>
      <FirstComponent></FirstComponent>
      <TemplateExpression></TemplateExpression>
      <ParentComponent></ParentComponent>
      <Events></Events>
    </div>
    
    
   </div>
  )
}
