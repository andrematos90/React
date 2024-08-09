import React from 'react'
import Style from './../components/DetalhesCarros.module.css'

const DetalhesCarros = ({marca, modelo, ano, cor}) => {
  return (
    <div className={Style['detalhes-carros']}>
       <p>Marca: {marca}</p>
       <p>Modelo: {modelo}</p>
       <p>Ano: {ano}</p>
       <p>Cor: {cor}</p>
    </div>
  )
}

export default DetalhesCarros