import styles from './CarDetails.module.css'


const CarDetails = ({model, brand, age}) =>{
    return(
        <>
        <p className = {styles.car_model}>Modelo: {model}</p>
        <p className= {styles.car_brand}>Marca: {brand}</p>
        <p className= {styles.car_age}>Ano: {age}</p>
        </>

    )
}

export default CarDetails;