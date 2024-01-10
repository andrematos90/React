const TemplateExpressions = () => {

    const name = "André"

    const twingo = {
        modelo:"twingo",
        marca:"renault",
        ano: 2001
    }

    return(
        <div>
            <h1> Olá {name}!</h1>
            <h1>Modelo: {twingo.modelo}</h1>
            <h1>Marca: {twingo.marca}</h1>
            <h1>Ano: {twingo.ano}</h1>
            <h1>{twingo.ano + 10}</h1>
        </div>
    )
}

    export default TemplateExpressions