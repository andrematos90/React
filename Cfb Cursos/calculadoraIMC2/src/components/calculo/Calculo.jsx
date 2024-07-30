

const Calculo = ({altura, peso}) => {

    const CalcularIMC=(altura, peso)=>{
        altura = altura /100
       return  (peso/(altura*altura)).toFixed(2);
    };

  return (
   
  <div>
    <h1>Resultado: {CalcularIMC(altura, peso)}</h1>
  </div>
   
  )
}

export default Calculo