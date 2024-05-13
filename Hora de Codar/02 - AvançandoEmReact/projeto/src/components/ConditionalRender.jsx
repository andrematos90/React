import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false)

    return(
        <>
       {x && <p>x é verdadeiro</p>}
       {!x && <p>agora x é falso</p>}
        
        </>
    )
}


export default ConditionalRender;