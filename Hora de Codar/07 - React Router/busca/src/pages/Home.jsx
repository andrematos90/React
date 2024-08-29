import React from 'react';
import {useFetch} from './../hook/useFetch'




const Home = () => {

  const url = 'http://localhost:5000/products';

  const {data:items}=useFetch(url);

  return (
    <div>
       {items && (
      <div>
        {items.map((product)=>(
          <p key={product.id}>{product.name}-{product.price}</p>
        ))}
      </div>
     )}   
    </div>
  )
}

export default Home;