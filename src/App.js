//TRABALHANDO COM LISTAS
import React, {Component} from "react";


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {id: 1, nomeusuario: "Alcemir", idade: 40},
        {id: 2, nomeusuario: "Maria", idade: 7},
        {id: 3, nomeusuario: "Samuel", idade: 10}
      ]
    }
  }
  
  render(){
    return(
      <div>
        {this.state.feed.map((lista)=>{
          return(
            <div><h3>{lista.nomeusuario}</h3></div>
          )
        })}
      </div>
    )
  }
}
export default App;

// FIM TRABALHANDO COM LISTAS


/*

import React, {Component} from "react";
import Membro from "./componentes/Membro";


class App extends Component{

  render(){
    return(
      <div>
        <Membro nome="Visitante"/>
      </div>
    )
  }
}
export default App;*/






/*
//COMPONENTES COM STATES
import React, {Component} from "react";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: "Alcemir",
      idade: 40,
      contador: 0
    };
    this.mais = this.mais.bind(this);
    this.menos = this.menos.bind(this)
  }

  mais(){
    let estado = this.state;
    estado.contador += 1;
    estado.nome = "Alcemir Macêdo";
    this.setState(estado);
  }

  menos(){
    let estado = this.state;
    if(estado.contador === 0){
      alert("mínimo 0");
      return;
    }
    estado.contador -= 1;
    estado.idade = "42";
    this.setState(estado);
  }

  render(){
    return(
      <div>
        <h1>Olá mundo</h1>
        <p>Nome: {this.state.nome} / Idade: {this.state.idade}</p>
        <button onClick={this.menos}>- </button> {this.state.contador} <button onClick={this.mais}> +</button>
      </div>
    )
  }
}
export default App;
// FIM COMPONENTES COM STATES

/*
//COMPONENTES USANDO CLASS COMPONENTS
import React, {Component} from "react";

class Usuario extends Component{
  render(){
    return(
      <div>
        <Dadospessoais username={this.props.nome} age={this.props.idade}/>
        <Midias github={this.props.github} linkedin={this.props.linkedin}/>
        <hr/>
      </div>
    )
  }
}

class Dadospessoais extends Component{
  render(){
    return(
      <div>
        <h2>Nome: {this.props.username} / Idade: {this.props.age}</h2>
      </div>
    )
  }
}

class Midias extends Component{
  render(){
    return(
      <div>
        <p>Github: {this.props.github} / Linkedin: {this.props.linkedin}</p>
      </div>
    )
  }
}

function App(){
  return(
    <div>
      <h1>Seja Bem Vindo</h1>
      <Usuario nome="Alcemir" idade="41" github="AlcemirMacedo" linkedin="AlcemirMacedo"/>
    </div>
  )
}
export default App;
//FIM COMPONENTES USANDO CLASS COMPONENTS
*/