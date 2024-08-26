import React from 'react';  // Importa a biblioteca React
import { useState } from 'react';  // Importa o hook useState do React (não está sendo utilizado neste código, pode ser removido)
import { useFetchData } from '../hooks/useFetchData';  // Importa o hook personalizado useFetchData para buscar dados da API
import { Link } from 'react-router-dom';  // Importa o componente Link para navegação entre páginas no React Router

const Home = () => {  // Define o componente funcional Home

    const url = 'http://localhost:5000/products';  // Define a URL da API de onde os dados serão buscados

    const { data: items } = useFetchData(url);  // Usa o hook useFetchData para buscar dados da API e armazena-os na variável items

    return (
        <div className="App">  {/* Container principal do componente */}
            {Array.isArray(items) && (  // Verifica se items é um array antes de renderizar
                <div>
                    {items.map((product) => (  // Itera sobre o array de items e renderiza um parágrafo para cada produto
                        <p key={product.id}>  {/* Define uma chave única para cada parágrafo */}
                            {product.name} - {product.price}  {/* Exibe o nome e o preço do produto */}
                            
                            {/* Rota dinâmica */}
                            <Link to={`/products/${product.id}`} >Detalhes</Link>  {/* Cria um link para a página de detalhes do produto com base no ID */}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;  // Exporta o componente Home como padrão
