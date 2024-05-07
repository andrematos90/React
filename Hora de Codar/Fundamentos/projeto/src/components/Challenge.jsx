const Challenge = () =>{

    const a = 8;
    const b = 9;

    const soma = () =>{
        return(
            console.log(a + b)
        )
    }

    return(
        <div>
            <button onClick={soma}>Somar</button>
        </div>
    )

}

export default Challenge;