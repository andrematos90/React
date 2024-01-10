import React, { useState } from 'react';


const Challenge02 = () => {
  const [numberOne, setNumberOne] = useState(1);
  const [numberTwo, setNumberTwo] = useState(2);
  const [result, setResult] = useState(0);

  const somar = () => {
    const soma = numberOne + numberTwo;
    setResult(soma);
  };

  return (
    <div>
      <h1>Primeiro Número: {numberOne}</h1>
      <h1>Segundo Número: {numberTwo}</h1>
      <button onClick={somar}>Somar números</button>
      <h1>Resultado: {result}</h1>
    </div>
  );
};


export default Challenge02;
