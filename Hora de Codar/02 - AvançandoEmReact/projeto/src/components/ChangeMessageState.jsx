import React from 'react'

function ChangeMessageState(handleMessage) {
    const messages = ["oi", "ola", "oi tudo bem? S2"];
  return (

    
    <>
    <button onClick={() => handleMessage(messages[0])}>1</button>
    <button onClick={() => handleMessage(messages[1])}>2</button>
    <button onClick={() => handleMessage(messages[2])}>3</button>
    </>
  )
}

export default ChangeMessageState