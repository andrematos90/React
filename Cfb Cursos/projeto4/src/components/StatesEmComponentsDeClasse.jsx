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
  ligaDesliga() {
    this.setState({ ligado: !this.state.ligado });
  }

  /*ATUALIZAÇÃO PASSANDO OUTRA FUNÇÃO EM SETSTATE
  É PASSADA UMA FUNÇÃO EM SETSTATE QUE ATUALIZA O VALOR
  PARA CASOS QUE O NOVO STATE NÃO É RENDERIZADO NA TELA 
  ACONTECE EM SITUAÇÕES EM QUE ENVOLVEM CÁLCULO OU PROPS*/

  acelerar() {
    this.setState((state, props) =>(
      {velocidadeAtual: state.velocidadeAtual + props.fator}
    ));
  }

  render() {
    return (
      <div>
        <h1>StatesEmComponentesDeClasse</h1>
        <br />

        <b>Carro:</b><p>{this.carro}</p>

        <p>Ligado? {this.state.ligado ? "Sim" : "Não"}</p>
        <button onClick={() => this.ligaDesliga()}>
          {this.state.ligado ? "Ligar" : "Desligar"}
        </button>

        <p>Velocidade Atual: {this.state.velocidadeAtual}</p>
        <button onClick={() => { this.acelerar()}}>Acelerar</button>

        <p>Cor: {this.state.cor}</p>
      </div>
    );
  }
}

export default StatesEmComponentesDeClasse;
