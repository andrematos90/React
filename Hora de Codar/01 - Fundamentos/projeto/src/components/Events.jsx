const Events = () => {

    const handleMyEvent = (e) =>{
        console.log("Evento Ativado!")
        console.log(e)
    };

    return(
        <div>
            <div><button onClick={handleMyEvent}>Clique</button></div>
            <div><button onClick={()=>{console.log("Executou o evento com essa função direta no html/jsx")}}>Clique aqui no evento com função</button></div>
        </div>
    );
};

export default Events;

// "e" ou "event" em handleMyEvent são os dados que o evento contém