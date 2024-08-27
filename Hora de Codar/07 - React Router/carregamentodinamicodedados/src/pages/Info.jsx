import React from 'react'
import { useParams } from 'react-router-dom'

const Info = () => {

    const {id}=useParams();

  return (
    <div>Info sobre o produto {id}</div>
  )
}

export default Info