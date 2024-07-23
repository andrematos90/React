import React from "react";

class StatesEmComponentesDeClasse extends React.Component {
  constructor(props) {
    super(props);

    //variável
    this.carro = "Twingo";
    this.state = {
      ligado: false,
      velocidadeAtual: 0,
      cor: "cor",
    };
  }

  
  //FUNÇÃO QUE ATUALIZA O ESTADO ATRAÉS DE "SETSTATE"
  LigaDesliga() {
    this.setState({ ligado: !this.state.ligado });
  }

  render() {
    return (
      <div>
        <h1>StatesEmComponentesDeClasse</h1>
        <br />

        <b>Carro:</b>
        <p>{this.carro}</p>

        <p>Ligado? {this.state.ligado ? "Sim" : "Não"}</p>
        <button onClick={()=>this.LigaDesliga()}>{this.state.ligado? "Ligar" : "Desligar"}</button>

        <p>Velocidade Atual: {this.state.velocidadeAtual}</p>
        <p>Cor: {this.state.cor}</p>
      </div>
    );
  }
}

export default StatesEmComponentesDeClasse;
