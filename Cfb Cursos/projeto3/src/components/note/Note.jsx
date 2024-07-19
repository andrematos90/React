import React from 'react'
import styles from './../note/Note.module.css'

const Sum = (props) => {
  return (
    <div className={styles.sum}>
    

        <legend>Informe a nota: {props.num}</legend>
        <input type="text" value={props.nota} onChange={(e)=>{props.setNota(e.target.value)}}/>

    
    </div>
  )
}

export default Sum;