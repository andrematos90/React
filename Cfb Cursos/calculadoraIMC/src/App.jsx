import React, { useState } from "react";

const TabelaIMC = () => {
  return (
    <table border="1" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Classificação</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Peso Normal</td>
          <td>entre 18,5 e 24,9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>Entre 25 e 29,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau I</td>
          <td>Entre 30 e 34,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau II</td>
          <td>Entre 35 e 39,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau III ou Mórbida</td>
          <td>Maior que 40</td>
        </tr>
      </tbody>
    </table>
  );
};

const FormularioPeso = ({ peso, setPeso }) => {
  return (
    <div>
      <label>Peso</label>
      <input
        type="text"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
    </div>
  );
};

const FormularioAltura = ({ altura, setAltura }) => {
  return (
    <div>
      <label>Altura</label>
      <input
        type="text"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
    </div>
  );
};

const FormularioCalcular = ({ peso, altura, setResultado }) => {
  const calculo = () => {
    const alturaM = altura / 100; // Se altura está em cm, converte para metros
    setResultado(peso / (alturaM * alturaM));
  };

  return (
    <div>
      <button onClick={calculo}>Calcular</button>
    </div>
  );
};

const Resultado = ({ resultado }) => {
  return (
    <div>
      <p>Resultado: {resultado.toFixed(2)}</p>
    </div>
  );
};

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  return (
    <>
      <FormularioPeso peso={peso} setPeso={setPeso} />
      <FormularioAltura altura={altura} setAltura={setAltura} />
      <FormularioCalcular peso={peso} altura={altura} setResultado={setResultado} />
      <Resultado resultado={resultado} />
      <TabelaIMC />
    </>
  );
}

export default App;
