import { useParams } from "react-router-dom"

const Product = () => {
    //4 - rota dimanica
    const {id} = useParams();  // const {id} = useParams(); faz referencia ao id da rota em App.js >>>   <Route path="products/:id" element={<Product />} />


  return (
    <>
    <p>ID do produto: {id}</p>
    </>
  )
}

export default Product