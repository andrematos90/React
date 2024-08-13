import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const url = "http://localhost:3000/products"; // Define a URL da API para onde a requisição será feita

  // Estados locais para os valores de 'name' e 'price'
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Cria um objeto com os dados do produto a ser enviado ao servidor
  const products = {
    name, // Atribui o valor do estado 'name'
    price, // Atribui o valor do estado 'price'
  };

  // Utiliza o hook useFetch para buscar dados da URL fornecida e configurar requisições
  const { data: items, httpConfig } = useFetch(url);

  const handleSubmit = async (e) => {
    // Previne o comportamento padrão do formulário de recarregar a página ao enviar
    e.preventDefault();

    // Chama o método 'httpConfig' do hook useFetch para enviar os dados usando o método POST
    httpConfig(products, "POST"); 
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Define a função handleSubmit para ser executada ao enviar o formulário */}
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={name} // O valor do input é vinculado ao estado 'name'
            onChange={(e) => setName(e.target.value)} // Atualiza o estado 'name' conforme o usuário digita
          />
        </label>
        <label>
          Preço:
          <input
            type="number"
            name="price"
            value={price} // O valor do input é vinculado ao estado 'price'
            onChange={(e) => setPrice(e.target.value)} // Atualiza o estado 'price' conforme o usuário digita
          />
        </label>
        <input type="submit" value="Criar" /> 
        {/* Botão para enviar o formulário */}
      </form>
    </>
  );
}

export default App;


/*

1. Componente App (Arquivo App.js):
Objetivo: Criar um formulário que captura o nome e o preço de um produto, e ao ser enviado, manda esses dados para uma API.
Passos no App.js:
Definição do Estado:
name e price são os estados que armazenam os valores inseridos pelo usuário no formulário.
Formulário:
O formulário captura os dados do usuário e, ao ser submetido, aciona a função handleSubmit.
Função handleSubmit:
Esta função é disparada quando o usuário clica em "Criar". Ela previne o comportamento padrão do formulário (recarregar a página) e chama a função httpConfig (importada via useFetch), passando os dados do produto (name e price) e o método HTTP "POST".
2. Hook useFetch (Arquivo useFetch.js):
Objetivo: Gerenciar requisições HTTP de forma centralizada e reativa. Neste caso, ele é usado para enviar os dados do produto via método POST.
Passos no useFetch.js:
Estados Internos:
data: Armazena a resposta da API.
config: Armazena as configurações da requisição (método, headers, corpo).
method: Armazena o método HTTP (como "POST").
callFetch: Usado para armazenar a resposta JSON da requisição.
Função httpConfig:
Quando chamada (como em handleSubmit), esta função configura as opções da requisição (como método, headers, e body) e define o método HTTP (POST).
useEffect:
Esse hook observa mudanças em config, method, e url. Quando qualquer um desses valores muda (como quando httpConfig é chamada), ele dispara uma função interna (httpRequest).
Função httpRequest:
Verifica se o método HTTP é "POST".
Realiza a requisição usando fetch com as configurações armazenadas em config e a URL fornecida.
Converte a resposta em JSON e armazena em callFetch.
3. Fluxo Completo:
Usuário Interage com o Formulário:

O usuário digita um nome e um preço para o produto e clica em "Criar".
Envio do Formulário:

O handleSubmit é chamado, que, por sua vez, chama httpConfig com os dados do produto e o método "POST".
Configuração da Requisição no Hook:

httpConfig atualiza os estados config e method no useFetch.
Requisição HTTP Disparada:

O useEffect detecta a mudança em config ou method e chama httpRequest.
httpRequest executa a requisição POST para a URL especificada, enviando os dados do produto.
Resposta da API:

A resposta da API é convertida em JSON e armazenada em callFetch.
O código atual não faz uso do callFetch diretamente, mas ele poderia ser usado para, por exemplo, exibir uma mensagem de sucesso ou atualizar uma lista de produtos na interface.
4. Resumo:
O componente App captura os dados do usuário e solicita ao hook useFetch que envie esses dados à API.
O hook useFetch configura a requisição e, reativamente, realiza a operação POST, retornando a resposta.
Juntos, esses dois códigos permitem enviar dados de um formulário para uma API de maneira organizada e modular, usando React Hooks para gerenciar o estado e os efeitos colaterais.

*/
