import React from "react";

// Criação de uma classe que estende React.Component
class Estrutura extends React.Component {
    constructor(props) {
        // Chama o construtor da classe pai (React.Component)
        super(props);

        // Define o estado inicial do componente
        this.state = {
            canal: 'CFB Cursos', // Propriedade de estado com o valor 'CFB Cursos'
            curso: 'React',      // Propriedade de estado com o valor 'React'
            ativo: true,         // Propriedade de estado que controla se está ativo ou não
            nome: this.props.nomeAluno // Propriedade de estado que recebe o nome do aluno das props
        };

        // Atribui o valor da prop 'status' a uma variável da classe
        this.status = this.props.status;

        // Bindagem do método ativarDesativar ao contexto da classe
        this.ad = this.ativarDesativar.bind(this);
    }

    // Método para alternar o estado 'ativo'
    ativarDesativar() {
        this.setState(
            state => ({
                ativo: !state.ativo // Inverte o valor de 'ativo'
            })
        );
    }

    // Método do ciclo de vida que é executado quando o componente é montado
    componentDidMount() {
        console.log('O componente foi criado');
    }

    // Método do ciclo de vida que é executado quando o componente é atualizado
    componentDidUpdate() {
        console.log('O componente foi atualizado');
    }

    // Método do ciclo de vida que é executado quando o componente é desmontado
    componentWillUnmount() {
        console.log('O componente foi removido');
    }

    // Método obrigatório que define o que será renderizado na tela
    render() {
        return (
            <>
                <h1>Componente de Classe</h1>
                {/* Botão que chama o método bindado ad */}
                <button onClick={this.ad}>Ativar Desativar</button>
                {/* Botão que chama diretamente o método ativarDesativar */}
                <button onClick={() => this.ativarDesativar()}>Ativar Desativar</button>
            </>
        );
    }
}

// Exporta a classe para que possa ser utilizada em outros arquivos
export default Estrutura;
