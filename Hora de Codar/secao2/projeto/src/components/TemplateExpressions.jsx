const TemplateExpressions = () =>{
    const name = "André Rosa de Matos";
    const data = {
    job : "dev",
    age: 34
    }
    return (
        <div>
            <h1>Dados:</h1>
            <p>Nome: {name}</p>
            <p>Profissão: {data.job}</p>
            <p>Idade: {data.age}</p>
        </div>
    )
}

export default TemplateExpressions;