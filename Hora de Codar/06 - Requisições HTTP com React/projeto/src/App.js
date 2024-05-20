// Importa o arquivo de estilos CSS
import './App.css';

// Importa os hooks `useEffect` e `useState` do React
import { useEffect, useState } from "react";

function App() {
  // Declara um estado chamado `products` e a função `setProducts` para atualizá-lo
  const [products, setProducts] = useState([]);
  
  // Define a URL da API onde os dados dos produtos serão buscados
  const url = "http://localhost:3000/products";

  // UseEffect para buscar dados da API após a montagem do componente
  useEffect(() => {
    // Declara uma função assíncrona para buscar dados da API
    async function fetchData() {
      // Faz uma requisição à URL especificada
      const res = await fetch(url);
      
      // Converte a resposta da API para JSON
      const data = await res.json();
      
      // Atualiza o estado `products` com os dados obtidos
      setProducts(data);
    }

    // Chama a função `fetchData` para buscar os dados
    fetchData();
  }, []); // O array vazio significa que este efeito será executado apenas uma vez, após a montagem do componente

  // Loga o estado `products` no console
  console.log(products);

  // Renderiza o componente
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {products.length > 0 ? ( // Verifica se `products` tem itens
        <ul>
          {products.map(product => ( // Mapeia cada produto para um item de lista
            <li key={product.id}>{product.name} - R${product.price}</li> // Exibe o nome e o preço do produto
          ))}
        </ul>
      ) : (
        <p>Carregando...</p> // Exibe "Carregando..." se a lista de produtos estiver vazia
      )}
    </div>
  );
}

// Exporta o componente `App` como padrão
export default App;



/*
Este código define um componente React que busca dados de uma API e os exibe em uma lista. Ele usa o useEffect para buscar os dados após a montagem do componente e o useState para armazenar os dados dos produtos. Enquanto os dados estão sendo buscados, uma mensagem "Carregando..." é exibida. Quando os dados são recebidos, eles são exibidos em uma lista.
 */