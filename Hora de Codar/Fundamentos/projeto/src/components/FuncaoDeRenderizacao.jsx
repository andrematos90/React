const FuncaoDeRenderizacao = () =>{
    

    const renderiza = (x) =>{
        if(x){
            return <h1>Renderiza pq x é true</h1>
        }
            else{
                return <h1>Renderiza pq x é false</h1>
            }
    }

    return (
        renderiza(false)
    )
}

export default FuncaoDeRenderizacao


/*no exemplo o componente  "FuncaoDeRenderizacao"
possui a  função "renderiza" que dependendo do valor de x renderiza 
algo diferente como retorno da função e do componente ja que o retorno do componente
ao invés de ser jsz/html é a função*/