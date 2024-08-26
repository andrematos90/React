import { useParams } from "react-router-dom";  // Importa o hook useParams do React Router

const Product = () => {  // Define o componente funcional Product

  // Rota dinâmica: captura o parâmetro 'id' da URL
  const { id } = useParams();  // useParams retorna um objeto com todos os parâmetros da URL, aqui extraímos o 'id'

  return (
    <div>ID do produto: {id}</div>  // Renderiza o ID do produto capturado da URL
  )
}

export default Product;  // Exporta o componente Product como padrão
