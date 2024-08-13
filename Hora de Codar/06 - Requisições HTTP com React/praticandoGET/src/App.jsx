// Importa os hooks useEffect e useState do React.
import { useEffect, useState } from 'react';
// Importa o arquivo CSS para estilização do componente.
import './App.css';

function App() {
  // Define o estado 'noticias' para armazenar as notícias, inicialmente como um array vazio.
  const [noticias, setNoticias] = useState([]); 

  // Define o estado 'erro' para armazenar qualquer mensagem de erro, inicialmente como null.
  const [erro, setErro] = useState(null);

  // Define a URL da API que será usada para buscar as notícias.
  const urlApi = "https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release";

  // O useEffect é usado para executar a função fetchData assim que o componente é montado.
  useEffect(() => {
    // Função assíncrona para buscar os dados da API.
    async function fetchData() {
      try {
        // Faz a requisição à API usando fetch.
        const resultado = await fetch(urlApi);

        // Verifica se a resposta não foi bem-sucedida (status code diferente de 200-299).
        if (!resultado.ok) {
          throw new Error('Erro ao buscar dados'); // Lança um erro que será capturado no catch.
        }

        // Converte a resposta da API para JSON.
        const resultadoJSON = await resultado.json();

        // Verifica se o JSON retornado contém um array de notícias dentro da propriedade 'items'.
        if (Array.isArray(resultadoJSON.items)) {
          setNoticias(resultadoJSON.items); // Atualiza o estado 'noticias' com o array retornado.
        } else {
          throw new Error('Dados retornados não contêm um array de notícias'); // Lança um erro se o formato estiver incorreto.
        }
      } catch (error) {
        setErro(error.message); // Atualiza o estado 'erro' com a mensagem do erro capturado.
      }
    }

    // Chama a função fetchData para buscar os dados.
    fetchData();
  }, []); // O array vazio [] significa que o useEffect será executado apenas uma vez, ao montar o componente.

  // JSX que renderiza o conteúdo da aplicação.
  return (
    <>
      <h1>Notícias</h1>
      {/* Se houver um erro, exibe a mensagem em vermelho */}
      {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}

      {/* Se as notícias ainda não foram carregadas, exibe "Carregando..." */}
      {noticias.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        // Mapeia sobre o array de notícias e renderiza cada uma delas.
        noticias.map((noticia, index) => (
          <div key={noticia.id}> {/* Usar o id da notícia como chave, se disponível */}
            <h2>{noticia.titulo}</h2> {/* Exibe o título da notícia */}
            <p>{noticia.introducao}</p> {/* Exibe a introdução da notícia */}
          </div>
        ))
      )}
    </>
  );
}

// Exporta o componente App como padrão para ser usado em outras partes da aplicação.
export default App;
