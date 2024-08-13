// Importa o hook useState do React, usado para gerenciar estados locais dentro do componente.
import { useState } from 'react'

// Importa o arquivo CSS para estilização do componente.
import './App.css'

// Define o componente principal da aplicação.
function App() {

  // Define a URL do backend onde os dados serão enviados.
  const url = "http://localhost:3000/products"

  // Define o estado local 'name' com uma função 'setName' para atualizá-lo.
  const [name, setName] = useState("")

  // Define o estado local 'price' com uma função 'setPrice' para atualizá-lo.
  const [price, setPrice] = useState("")

  // Função assíncrona que lida com o envio do formulário.
  const handleSubmit = async (e) => {
    // Prevê o comportamento padrão do formulário de recarregar a página ao enviar.
    e.preventDefault()
   
    // Cria um objeto com os dados do produto a ser enviado ao servidor.
    const products = {
      name,  // Atribui o valor do estado 'name'.
      price  // Atribui o valor do estado 'price'.
    };

    // Envia os dados do produto ao servidor usando o método POST.
    const res = await fetch(url, {
      method: "POST",  // Define o método HTTP como POST.
      headers: {
        "Content-Type": "application/json"  // Define o tipo de conteúdo como JSON.
      },
      body: JSON.stringify(products)  // Converte o objeto 'products' em uma string JSON para enviar.
    });

    // Aqui, você pode adicionar lógica adicional para lidar com a resposta 'res' se necessário.
  }

  // JSX que renderiza o formulário na tela.
  return (
    <>
      <form onSubmit={handleSubmit}>  {/* Define a função handleSubmit para ser executada ao enviar o formulário */}
        <label>
          Nome:
          <input 
            type="text" 
            name='name' 
            value={name}  // O valor do input é vinculado ao estado 'name'.
            onChange={(e)=> setName(e.target.value)}  // Atualiza o estado 'name' conforme o usuário digita.
          />
        </label>
        <label>
          Preço:
          <input 
            type="number" 
            name='price' 
            value={price}  // O valor do input é vinculado ao estado 'price'.
            onChange={(e)=> setPrice(e.target.value)}  // Atualiza o estado 'price' conforme o usuário digita.
          />
        </label>

        <label>
          <input type="submit" value="Criar"/>  {/* Botão para enviar o formulário */}
        </label>
      </form>
    </>
  )
}

// Exporta o componente App como padrão para que possa ser usado em outras partes da aplicação.
export default App
