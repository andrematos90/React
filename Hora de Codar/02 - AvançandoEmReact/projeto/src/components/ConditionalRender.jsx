import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name] = useState("Jubileu");

    return(
        <>

       {/*condicional simples*/}

       {x && <p>x é verdadeiro</p>}
       {!x && <p>agora x é falso</p>}


       {/*if else ternario*/}

       {name === "Jubileu" ? (<p>O nome é Jubileu</p> ) : (  <p>O nome não é Jubileu</p> ) }
        
        </>
    )
}


export default ConditionalRender;