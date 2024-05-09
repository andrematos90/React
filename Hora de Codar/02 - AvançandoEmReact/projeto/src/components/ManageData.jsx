import { useState } from "react";


const ManageData = () =>{
    let someData = 10;

    const [number, setNumber] = useState(15);

    return(
        <div>
            {/*sem usar useState */}
            <h3>{someData}</h3>
            <button onClick={()=>(someData = 15)}>Alterar</button>

            {/*com useState*/}
            <h3>{number}</h3>
            <button onClick={() => setNumber(25)}>Alterar com hook</button>
        </div>
    )
}

export default ManageData;






/*

const ManageData = () =>{
    let someData = 10;

    return(
        <div>
            <h3>{someData}</h3>
            <button onClick={()=>(someData = 15)}>Alterar</button>
        </div>
    )
}

export default ManageData;

Desta forma o valor da váriavel "someData" nao é alterado, para isso
se usa o hooke "useState"


Este código é um exemplo de um componente funcional em React que usa o hook useState para gerenciar o estado de um componente. Vamos analisar linha por linha:

import { useState } from "react";: Esta linha importa a função useState do pacote react, que é um hook que permite adicionar estado a componentes funcionais em React.
const ManageData = () => { ... }: Aqui, definimos um componente funcional chamado ManageData. Este componente não recebe nenhum argumento e é definido como uma arrow function.
let someData = 10;: Declaração de uma variável someData com o valor inicial de 10.
const [number, setNumber] = useState(15);: Utilizando o hook useState, declaramos um estado chamado number com o valor inicial de 15. number é o estado em si, enquanto setNumber é a função usada para atualizar o estado number.
O retorno do componente é um fragmento <div>...</div> que contém dois conjuntos de elementos:
<h3>{someData}</h3>: Exibe o valor da variável someData.
<button onClick={() => (someData = 15)}>Alterar</button>: Define um botão que, quando clicado, atualiza diretamente o valor da variável someData. No entanto, essa abordagem não irá renderizar novamente o componente com o novo valor.
<h3>{number}</h3>: Exibe o valor do estado number.
<button onClick={() => setNumber(25)}>Alterar com hook</button>: Define um botão que, quando clicado, chama a função setNumber com o novo valor 25, atualizando assim o estado number. Isso acionará a renderização do componente com o novo valor.
export default ManageData;: Exporta o componente ManageData para que possa ser importado e usado em outros lugares do código.
Em resumo, este código demonstra a diferença entre gerenciar o estado diretamente usando variáveis normais e usar o hook useState para gerenciar o estado de forma mais eficiente e React-like. O uso de useState permite que o estado seja atualizado de forma reativa, acionando a renderização do componente sempre que o estado é modificado.


*/ 