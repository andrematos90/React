import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [noticias, setNoticias] = useState([]); // Inicializado como array vazio
  const [erro, setErro] = useState(null);

  const urlApi = "https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release";

  useEffect(() => {
    async function fetchData() {
      try {
        const resultado = await fetch(urlApi);

        if (!resultado.ok) {
          throw new Error('Erro ao buscar dados');
        }

        const resultadoJSON = await resultado.json();

        // Acesse o array de notícias dentro de 'items'
        if (Array.isArray(resultadoJSON.items)) {
          setNoticias(resultadoJSON.items);
        } else {
          throw new Error('Dados retornados não contêm um array de notícias');
        }
      } catch (error) {
        setErro(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Notícias</h1>
      {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}
      {noticias.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        noticias.map((noticia, index) => (
          <div key={noticia.id}> {/* Usar o id como chave, se disponível */}
            <h2>{noticia.titulo}</h2>
            <p>{noticia.introducao}</p>
          </div>
        ))
      )}
    </>
  );
}

export default App;
