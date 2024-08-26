import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Importa componentes essenciais do React Router
import Navbar from './components/Navbar';  // Importa o componente Navbar
import Home from './pages/Home';  // Importa o componente Home
import About from './pages/About';  // Importa o componente About
import Product from './pages/Product';  // Importa o componente Product

function App() {  // Define o componente principal App

  return (
    <>
      {/* Envolvendo a aplicação com o BrowserRouter para habilitar a navegação entre rotas */}
      <BrowserRouter>
        {/* Componente Navbar renderizado em todas as páginas */}
        <Navbar />
        
        {/* Define as rotas da aplicação */}
        <Routes>
          {/* Rota para a página inicial (Home) */}
          <Route path='/' element={<Home />} />
          
          {/* Rota para a página "About" */}
          <Route path='/About' element={<About />} />
          
          {/* Rota dinâmica para a página de produtos individuais */}
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;  // Exporta o componente App como padrão