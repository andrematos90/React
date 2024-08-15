import { useState, useEffect } from "react"; // Importa os hooks useState e useEffect do React

// Define o hook customizado useFetch que aceita uma URL como parâmetro
export const useFetch = (url) => {

  // Declara um estado para armazenar os dados retornados pela requisição
  const [data, setData] = useState(null);

  // Declara um estado para armazenar o valor de loading
  const [loading, setLoading] = useState(false);

  //Declara um estado para armanezar um erro caso aconteceça na requisição
  const [error, setError]=useState(null);

  // useEffect é utilizado para executar a função fetchData quando o componente é montado ou a URL muda
  useEffect(() => {

    // Função assíncrona para buscar dados da URL
    const fetchData = async () => {

      setLoading(true); // Define loading como true, indicando que a requisição está em andamento

      try {
        // Realiza a requisição HTTP para a URL fornecida
        const res = await fetch(url);

        // Converte a resposta para JSON
        const json = await res.json();

        // Atualiza o estado com os dados recebidos
        setData(json);

        setLoading(false); // Define loading como false, indicando que a requisição foi concluída
      } catch (error) {
        // Em caso de erro, exibe uma mensagem de erro no console
        console.error("Erro ao buscar dados:", error);
        setLoading(false); // Define loading como false mesmo em caso de erro, para parar a indicação de carregamento.

        setError("Houve um erro na requisição dos dados!") // seta o erro que aconteceu com a mensagem que sera retornanda ao App.js e renderizada na tela
      }
    };

    // Chama a função fetchData para realizar a busca dos dados
    fetchData();
  }, [url]); // O useEffect será executado novamente se a URL mudar

  // Retorna o estado `data` e `loading` para ser utilizado pelo componente que chama o hook
  return { data, loading, error };
};
