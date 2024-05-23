// Importa o arquivo de estilos CSS
import "./App.css";

// Importa os hooks `useEffect` e `useState` do React
import { useState } from "react";

// 05 - import de custom hook
import { useFetch } from "./hooks/useFetch";

// Define a URL da API onde os dados dos produtos serão buscados
const url = "http://localhost:3000/products";

function App() {
  // Declara um estado chamado `products` e a função `setProducts` para atualizá-lo
  const [products, setProducts] = useState([]);

  // 05 - custom hook e  06 - refatorando POST
  const { data: items, httpConfig, loading, error } = useFetch(url);


  //Declara name e price
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  

  //03 - adição de produtos

  const handleSubmit = async (e) => {
    // Previne o comportamento padrão do formulário, que é recarregar ao página ao enviar
    e.preventDefault();

    

    //06 - POST refatorado com hook

    const product = {name, price};
    httpConfig(product, "POST");
   

    //resseta os states, para limpar os campos
    setName("");
    setPrice("");
  };

  
  return (
    
    <div className="App">
      
      <h1>Lista de Produtos</h1>
      {/*07 - loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
            </li>
          ))}
      </ul>
      

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço R$:
            <input
              type="number"
              value={price}
              price="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 08 - loading no post */}
          {loading &&  <input type="submit" value="Aguarde"  disabled/>}
         {!error &&  <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

// Exporta o componente `App` como padrão
export default App;

/*
Este código define um componente React que busca dados de uma API e os exibe em uma lista. Ele usa o useEffect para buscar os dados após a montagem do componente e o useState para armazenar os dados dos produtos. Enquanto os dados estão sendo buscados, uma mensagem "Carregando..." é exibida. Quando os dados são recebidos, eles são exibidos em uma lista.
 */
