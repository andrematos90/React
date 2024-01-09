const Challenge02 = () => {

    const numberOne = 1;
    const numberTwo = 2;
    
    const Somar =  () => {
        alert(numberOne + numberTwo)
    }

    return (
    <div>
        <h1>Primeiro Número: {numberOne}</h1>
        <h1>Segundo Número: {numberTwo}</h1>
        <button onClick={Somar}>Somar números</button>
    </div>
    );
}

export default Challenge02;