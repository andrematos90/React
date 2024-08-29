// Importa o hook useNavigate do react-router-dom para realizar navegações programáticas.
import { useNavigate } from 'react-router-dom';
// Importa o hook useState do React para gerenciar estados locais.
import { useState } from 'react';
// Importa o React, que é necessário para criar componentes React.
import React from 'react';

// Define um componente funcional chamado SearchForm.
const SearchForm = () => {

    // Inicializa o hook useNavigate para obter uma função que permite navegar programaticamente.
    const navigate = useNavigate();
    // Define um estado local chamado 'query' e a função 'setQuery' para atualizá-lo.
    const [query, setQuery] = useState();

    // Função que será chamada quando o formulário for enviado.
    const handleSubmit = (e) => {
        // Previne o comportamento padrão de recarregar a página ao submeter o formulário.
        e.preventDefault();

        // Navega para a rota "/search", passando o valor de 'query' como um parâmetro de consulta (query string).
        navigate("/search?q=" + query);
    }

    return (
        // Renderiza um formulário que executa a função handleSubmit ao ser enviado.
        <form onSubmit={handleSubmit}>
            {/* Campo de texto que atualiza o estado 'query' conforme o usuário digita. */}
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
            {/* Botão de submissão do formulário. */}
            <input type="submit" value="Buscar" />
        </form>
    )
}

// Exporta o componente SearchForm como padrão, permitindo que ele seja importado e utilizado em outras partes da aplicação.
export default SearchForm;
