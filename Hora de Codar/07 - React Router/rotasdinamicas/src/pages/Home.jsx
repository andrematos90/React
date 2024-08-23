import React from 'react'
import { useState } from 'react'
import { useFetchData } from '../hooks/useFetchData';

const Home = () => {

    const url = 'http://localhost:5000/products';

    const {data:items}=useFetchData(url);

  return (
    <div className="App">
    {Array.isArray(items) && (
  <div>
    {items.map((product) => (
      <p key={product.id}>
        {product.name} - {product.price}
      </p>
    ))}
  </div>
)}

  </div>
  )
}

export default Home