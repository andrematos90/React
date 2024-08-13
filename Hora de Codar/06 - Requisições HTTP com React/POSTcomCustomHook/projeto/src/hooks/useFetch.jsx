import { useState, useEffect } from "react";

// Hook personalizado para realizar requisições HTTP
export const useFetch = (url) => {

    // Estado para armazenar os dados retornados da requisição
    const [data, setData] = useState([]);
    // Estado para armazenar a configuração da requisição HTTP (como método, headers, etc.)
    const [config, setConfig] = useState(null);
    // Estado para armazenar o método HTTP (POST, GET, etc.)
    const [method, setMethod] = useState(null);
    // Estado usado para controlar quando uma nova requisição precisa ser feita
    const [callFetch, setCallFetch] = useState(false);

    // Função para configurar a requisição HTTP, particularmente útil para o método POST
    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method, // Define o método HTTP como POST
                headers: {
                    "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
                },
                body: JSON.stringify(data), // Converte os dados do produto em uma string JSON
            });

            setMethod(method); // Define o método HTTP no estado
        }
    };

    // useEffect que executa a requisição HTTP sempre que as dependências 'config', 'method', ou 'url' mudam
    useEffect(() => {

        const httpRequest = async () => {
            // Verifica se o método é POST antes de realizar a requisição
            if (method === "POST") {
                
                // Configura as opções da requisição usando os estados 'url' e 'config'
                let fetchOptions = [url, config];

                // Executa a requisição usando fetch com as opções configuradas
                const res = await fetch(...fetchOptions);

                // Converte a resposta da requisição em JSON
                const json = await res.json();

                // Armazena a resposta JSON no estado 'callFetch'
                setCallFetch(json);
            }
        };

        httpRequest(); // Chama a função que realiza a requisição

    }, [config, method, url]); // Executa o useEffect sempre que 'config', 'method' ou 'url' mudar

    // Retorna os dados da requisição e a função de configuração da requisição
    return { data, httpConfig };
};
