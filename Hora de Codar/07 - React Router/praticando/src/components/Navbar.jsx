// Importa o módulo React. Embora em versões recentes do React não seja mais necessário
// importar React diretamente quando se usa JSX, ainda é uma prática comum e segura.
import React from "react";

// Importa o componente Link do react-router-dom, que será usado para a navegação entre páginas
// sem recarregar a aplicação, ideal para aplicações SPA (Single Page Application).
import { Link } from "react-router-dom";

// Define o componente funcional Navbar, que será usado como um menu de navegação na aplicação.
const Navbar = () => {
  return (
    <nav>
      {/* O componente Link é usado para criar links que redirecionam para diferentes rotas
          na aplicação, sem recarregar a página. O atributo 'to' define a rota que será acessada. */}

      {/* Este Link redireciona o usuário para a rota raiz ("/"), que geralmente exibe a página Home. */}
      <Link to="/">Home</Link>

      {/* Este Link redireciona o usuário para a rota "/about", que geralmente exibe a página Sobre.
          Note que o caminho especificado no atributo 'to' é relativo, mas ainda funcionará corretamente
          desde que seja compatível com a configuração das rotas no arquivo App.js. */}
      <Link to="About">Sobre</Link>
    </nav>
  );
};

// Exporta o componente Navbar, tornando-o disponível para ser importado e usado em outros arquivos.
export default Navbar;

/*
Resumo:
Link: Substitui as tags <a> tradicionais do HTML em aplicações React. Isso melhora a experiência do usuário, já que a navegação entre páginas ocorre sem recarregar a página inteira.
to="/": Define o caminho para o qual o link levará. Neste caso, o link "Home" leva à rota raiz ("/").
to="About": Define o caminho para a rota "/about", que leva à página "Sobre".
Navbar: Componente que exibe o menu de navegação. Ele pode ser usado em todas as páginas para permitir a navegação entre as diferentes rotas da aplicação.
Este componente é simples, mas essencial para a navegação em uma aplicação React, permitindo que o usuário se mova entre as páginas Home e About.
*/