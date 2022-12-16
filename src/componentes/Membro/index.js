import React, {Component} from "react";

class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
          nome: props.nome,
          status: false
        }
        this.entrar = this.entrar.bind(this); 
    }

    entrar(nome){
        this.setState({nome: nome});
        this.setState({status: true});
    }
   
    render(){
        return(
            <div>
                <h2>Seja bem Vindo {this.state.nome}</h2> 
                
                {this.state.status ?
                <div>
                    <h1>Seja bem vindo ao sistema</h1>
                    <button onClick={() => this.setState({nome: "", status: false})}>Sair</button>
                </div> :
                <div>                    
                    <h2>Você não está logado no sistema</h2>                    
                    <button onClick={() => this.entrar('Alcemir')}>Entrar</button>
                </div>
                    
                }
                <h2>Olá, tudo bem?</h2>
            </div>
        )
    }
}
export default Membro;