const CarDetails = ({brand, model, age, newCar}) =>{
    return(
        <>
        <h1>Marca: {brand}</h1>
        <h1>Modelo: {model}</h1>
        <h1>Ano: {age}</h1>
        {newCar && <p>Carro novo!</p>}
        </>
    )
}


export default CarDetails;