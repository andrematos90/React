import { useState, useEffect } from "react"; // Importa os hooks useState e useEffect do React

// Define o hook customizado useFetch que aceita uma URL como parâmetro
export const useFetch = (url) => {

  // Declara um estado para armazenar os dados retornados pela requisição
  const [data, setData] = useState(null);

  // useEffect é utilizado para executar a função fetchData quando o componente é montado ou a URL muda
  useEffect(() => {

    // Função assíncrona para buscar dados da URL
    const fetchData = async () => {
      try {
        // Realiza a requisição HTTP para a URL fornecida
        const res = await fetch(url);

        // Converte a resposta para JSON
        const json = await res.json();

        // Atualiza o estado com os dados recebidos
        setData(json);
      } catch (error) {
        // Em caso de erro, você pode adicionar lógica para lidar com erros
        console.error("Erro ao buscar dados:", error);
      }
    };

    // Chama a função fetchData para realizar a busca dos dados
    fetchData();
  }, [url]); // O useEffect será executado novamente se a URL mudar

  // Retorna o estado `data` para ser utilizado pelo componente que chama o hook
  return { data };
};
