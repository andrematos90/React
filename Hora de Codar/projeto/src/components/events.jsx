const Events = () => {

    const HandleMyEvent = (event) =>{
        console.log("Hello World! Clicou!")
        console.log(event)
    };

    return (
        <div>
            <div>
                <button onClick={HandleMyEvent}>Clique aqui</button>
            </div>
        </div>
    )
}

export default Events