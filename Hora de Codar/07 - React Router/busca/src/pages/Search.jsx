// Importa os hooks useSearchParams e Link do react-router-dom.
import { useSearchParams, Link } from "react-router-dom";
// Importa o hook personalizado useFetch, que provavelmente é usado para fazer requisições HTTP.
import { useFetch } from "../hook/useFetch";

// Define um componente funcional chamado Search.
const Search = () => {

    // Inicializa o hook useSearchParams para acessar e manipular os parâmetros da URL.
    const [searchParams] = useSearchParams();

    // Constrói a URL para buscar os produtos do servidor, utilizando os parâmetros de busca.
    const url = "http://localhost:5000/products?" + searchParams;

    // Usa o hook useFetch para buscar dados da URL especificada.
    // O resultado da busca é armazenado na variável 'items'.
    const { data: items } = useFetch(url);

    return (
        <div>
            <h1>Resultados:</h1>
            {/* Renderiza os itens se eles existirem (se a requisição foi bem-sucedida e retornou dados). */}
            {items && (
                <div>
                    {/* Itera sobre a lista de produtos e exibe o nome e preço de cada um. */}
                    {items.map((product) => (
                        <p key={product.id}>{product.name} - {product.price}</p>
                    ))}
                </div>
            )}
        </div>
    )
}

// Exporta o componente Search como padrão, permitindo que ele seja importado e utilizado em outras partes da aplicação.
export default Search;
