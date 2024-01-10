const Events = () => {

   const renderSomething = (x) => {
    if(x){
       return <h1>Renderizando isso se for verdadeiro</h1>
    }
    else{
        return <h1>Ou renderiza isso se for falso</h1>
    }
   }

    return (
        <div>
            <div>
                {renderSomething(false)}
            </div>
        </div>
    )
}

export default Events