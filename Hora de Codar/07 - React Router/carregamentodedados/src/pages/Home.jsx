import React from 'react'
import { useState } from 'react';
import {useFetchData} from './../hooks/useFetchData'

const Home = () => {
    
    const url = 'http://localhost:5000/products'

    const [products, setProducts] = useState([]);
  
    const {data:items}=useFetchData(url);
  
    return (
      <>
     
     {items && (
      <div>
        {items.map((product)=>(
          <p key={product.id}>{product.name}-{product.price}</p>
        ))}
      </div>
     )}   
      </>
    )
}

export default Home