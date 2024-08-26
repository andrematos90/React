import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


const Product = () => {

    const {id} = useParams();

    const url = 'http://localhost:5000/products/' + id;

    const {data:product}=useFetch(url)

    
   

  return (
    <>
    {product && (
        <div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
        </div>
    )}</>
  )

}
export default Product;