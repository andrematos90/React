import React from "react";


class MinhaClasse extends React.Component{

    //método construtor de "MinhaClasse" e passa props
    constructor(props){

        //chama o método construtor da classe "Component" que foi herdada e passa a props 
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Componente de Classe</h1><br />
                <p>{this.props.atributo}</p>
            </div>
            
        )
    }
}

export default MinhaClasse;