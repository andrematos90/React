const AnimalDetails = ({name, especie, idade}) =>{
    return(
        <>
        <h1>Animal: {name}</h1>
        <p>Idade: {idade}</p>
        {especie === "cachorro" ? (<p>é um cachorrudo</p>) : (<p>gatão</p>)}
        </>
    )
}


export default AnimalDetails;