import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


const Product = () => {
    //4 - rota dimanica
    const {id} = useParams();  // const {id} = useParams(); faz referencia ao id da rota em App.js >>>   <Route path="products/:id" element={<Product />} />

    //5 - carregamento dado individual
    const url = "http://localhost:3000/products" + id;

    const {data: product, loading, error} = useFetch(url);
    console.log(product)
;
  return (
    <>
    <p>ID do produto: {id}</p>
    {error && <p>Houve um erro ao carregar o producto!</p>}
    {loading && <p>Carregando....</p>}
    {product && (
      <div>
        <h1>{product.name}</h1>
        <p>R$ {product.price}</p>
      </div>
    )}
    </>
  )
}

export default Product