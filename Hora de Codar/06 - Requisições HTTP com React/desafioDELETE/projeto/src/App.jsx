import { useState } from "react";
import { useFetch } from "./hook/useFetch";
import { useDelete } from "./hook/useDelete";
import { useEffect } from "react";

function App() {
  const url = "http://localhost:5000/products";

  const { data: items, refetch } = useFetch(url);

  const {deleteItem} = useDelete();

  const handleDelete = async (id) =>{
    await deleteItem(url, id);
    refetch();
    
  }

  return (
    <>
      <div>
        {items ? (
          items.map((product) => (
            <p key={product.id}>
              {product.name} - {product.price}
              <button onClick={()=>{handleDelete(product.id)}}>Excluir</button>
            </p>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default App;
