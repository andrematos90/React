// Importa o arquivo de estilos CSS específico para o componente App.
import './App.css';

// Importa os componentes BrowserRouter, Route e Routes do react-router-dom,
// que são necessários para configurar o roteamento na aplicação.
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importa os componentes das páginas que serão renderizadas com base nas rotas.
import Home from './pages/Home';
import About from './pages/About';

// Importa o componente Navbar, que será utilizado como menu de navegação.
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      {/* Este título (h1) aparece em todas as páginas da aplicação,
          pois está fora do roteamento, sendo renderizado independentemente da rota. */}
      <h1>Está parte aparece em todas as páginas</h1>

      {/* BrowserRouter envolve todos os componentes que irão utilizar o roteamento.
          Ele é necessário para que o React Router funcione e mantenha o histórico das rotas. */}
      <BrowserRouter>

        {/* O componente Navbar é renderizado em todas as páginas, pois está fora do Routes.
            Isso garante que o menu de navegação esteja sempre visível. */}
        <Navbar />

        {/* O componente Routes define as diferentes rotas da aplicação.
            Ele funciona como um container para as diferentes rotas definidas. */}
        <Routes>

          {/* A rota '/' define que, quando a URL for exatamente '/', o componente Home será renderizado.
              O componente é passado via a prop 'element' */}
          <Route path='/' element={<Home />} />

          {/* A rota '/about' define que, quando a URL for '/about', o componente About será renderizado.
              Novamente, o componente é passado via a prop 'element'. */}
          <Route path='/about' element={<About />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;  // Exporta o componente App como padrão, permitindo que seja importado em outros arquivos.

/*
Resumo:
BrowserRouter: Componente necessário para habilitar o roteamento no React, mantendo o histórico das rotas.
Routes: Container que contém todas as rotas da aplicação.
Route: Define uma rota específica, indicando o caminho (path) e qual componente deve ser renderizado (element) quando esse caminho for acessado.
Navbar: Componente que é exibido em todas as páginas, independentemente da rota, pois está fora de <Routes>.
<h1>: Um exemplo de conteúdo que aparece em todas as páginas, independentemente da rota, pois está fora de <BrowserRouter> e <Routes>.
Esse código cria uma aplicação simples com navegação entre duas páginas (Home e About), mantendo um cabeçalho e um menu de navegação sempre visíveis.
*/