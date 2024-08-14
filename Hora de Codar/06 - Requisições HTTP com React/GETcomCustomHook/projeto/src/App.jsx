import "./App.css"; // Importa o arquivo de estilos CSS para estilizar o componente
import { useState } from "react"; // Importa o hook useState do React para gerenciar o estado do componente
import { useFetch } from "./hooks/useFetch"; // Importa um hook customizado useFetch para realizar a requisição HTTP

const url = "http://localhost:3000/products"; // Define a URL da API para onde a requisição será feita

function App() {
  // Declara um estado para armazenar os produtos
  const [products, setProducts] = useState([]);

  // Utiliza o hook useFetch para buscar dados da URL fornecida
  const { data: items, loading } = useFetch(url); // esta enviando a url e recebendo data que vira items, e recebendo loading

  // Declara estados para armazenar o nome e o preço dos produtos (não utilizados no momento)
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="App">
      {/* Contêiner principal do componente */}
      <h1>Lista de Produtos</h1> {/* Título da lista de produtos */}
      <div>
        {loading ? (
          <p>Carregando....</p> // Exibe mensagem de carregamento enquanto a requisição está em andamento
        ) : (
          <div>
            {/* Verifica se items existe e, se sim, mapeia sobre ele para exibir a lista de produtos */}
            {items &&
              items.map((product) => (
                <p key={product.id}>
                  {product.name} - {product.price} {/* Exibe o nome e o preço de cada produto */}
                </p>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App; // Exporta o componente App para ser utilizado em outras partes da aplicação
