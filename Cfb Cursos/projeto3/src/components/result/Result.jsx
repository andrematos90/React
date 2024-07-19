import React from 'react'
import styles from './../result/Result.module.css'

const Result = (props) => {
  return (
    <div className={styles.result}>
        <h1>Resultado: {props.somaNotas}</h1>
        <legend>{props.somaNotas >= 70  ? "Aprovado" : "Reprovado" }</legend>

    </div>
  )
}

export default Result;