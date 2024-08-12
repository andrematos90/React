// Importa o arquivo de estilos CSS
import './App.css';

// Importa os hooks `useEffect` e `useState` do React
import { useEffect, useState } from "react";

function App() {
  // Declara um estado chamado `products` e a função `setProducts` para atualizá-lo
  const [products, setProducts] = useState([]);

  //Declara name e price
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  
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




  //03 - adição de produtos

  const handleSubmit = async(e) => {
    // Previne o comportamento padrão do formulário, que é recarregar ao página ao enviar
    e.preventDefault();
  
    // Cria um objeto 'product' com as propriedades 'name' e 'price' usando os valores atuais dessas variáveis que recebem os estados name e price antes declarados
    const product = {
      name,
      price,
    };
  
    // Envia uma requisição HTTP POST para a URL especificada
    // A função 'fetch' é assíncrona, então usamos 'await' para esperar a resposta da requisição
    const requisicao = await fetch(url, {
      // Especifica que o método da requisição é POST
      method: "POST",
      // Define os cabeçalhos da requisição, especificando que o corpo da requisição será em formato JSON
      headers: {
        "Content-Type": "application/json",
      },
      // Converte o objeto 'product' para uma string JSON e o inclui no corpo da requisição
      body: JSON.stringify(product),
    });



    //04 - Carregammento dinâmico (atualização automatica da página com os novos dados)


    // Converte a resposta da requisição HTTP em um objeto JavaScript.

    //await: Espera que a conversão seja concluída antes de continuar. Como json() retorna uma Promise, usamos await para aguardar sua resolução.
    const addedProduct = await requisicao.json()

    /* Atualiza o estado do componente React com o novo produto adicionado.

    - setProducts: Função do hook useState usada para atualizar o estado do componente.
    - prevProducts: Representa o estado atual da lista de produtos antes da atualização. É passado automaticamente para a função fornecida a setProducts.
    - [...] (spread operator): Cria uma nova array que inclui todos os elementos do array prevProducts e adiciona addedProduct no final. Isso mantém todos os produtos existentes e adiciona o novo produto.
    -A função fornecida a setProducts é chamada de função atualizadora, que recebe o estado anterior e retorna o novo estado. Isso é necessário porque a atualização do estado depende do estado anterior.*/
    setProducts((prevProducts) => [...prevProducts, addedProduct])

    //resseta os states, para limpar os campos
    setName("");
    setPrice("");
   
  };
  



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

      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome: 
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço R$: 
            <input type="number" value={price} price='price' onChange={(e) => setPrice(e.target.value)}/>
          </label>
          <input type="submit" value= "Add Produto" />
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