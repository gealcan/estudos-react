// class MyButton extends Component {
//   render() {
//     return (
//       <button
//         onClick={() => {
//           this.props.handleClick(this.props.label);
//         }}
//       >
//         {this.props.label}
//       </button>
//     );
//   }
// }

// class MyLabel extends Component {
//   render() {
//     console.log(this.props);
//     return <p>Cliquei no: {this.props.text}</p>;
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       labelText: ""
//     };
//   }

//   setLabelText = labelText => {
//     this.setState({ labelText }); // é igual á  this.setState({ labelText: labelText }
//   };
//   render() {
//     console.log(this.state);
//     return (
//       <div className="App">
//         <MyLabel text={this.state.labelText} />
//         <MyButton handleClick={this.setLabelText} label="Botão 1" style={{}}/>
//         <MyButton handleClick={this.setLabelText} label="Botão 2" />
//         <MyButton handleClick={this.setLabelText} label="Botão 3" />
//         <MyButton handleClick={this.setLabelText} label="Botão 4" />
//       </div>
//     );
//   }
// }

// PROPS = são os parâmetros que voce passa para o seu componente, por isso
// comparamos componentes com funcao
// vc passa a props como atributos de html
// no exemplo abaixo , o text que passa para o App , vai ser passado para o filho My label
// assim como o label do Button
// POREM, esses butoes nao estão fazendo nada. e eu quero quando eu clickar nel
//q ue ele passe sua label para o outro Componente MyLabel, para saber qual button foi clickado
// Aí entra STATE
// como os dois componentes MyLabel e MyButton estão dentro do componente APP
// vamos colocar o state no componete Pai = 'App' para podermos
// gerenciar o estado da minha label e modificar em qualquer
//outro componente dentro do APP  que eu consiga passar a funçao como props
// ENTAO crio o objeto state com labelText = vazio.
// ENTAO crio uma funçao setLabelText que muda o texto para o texto que ele recebe
// ENTAO passo para meus bottoes como handleClick
// ENTAO vou no onClick do button do componente Mybutton
// abro uma funçao vazia Arrow , passando o handleClick recebendo o this.props.label como parametro
// ENTAO passamos esse novo state para o text do componente Mylabel
// OBS: sempre que quisermos modificar o state, temos que usar a funçao setState.
// OBS: A funçao setState é Assincrona,
// OBS: A funçao setState, 1 parametro é seu objeto, segundo é um callback(executada assim que meu setState terminar)
//OBS : a funçao setState faz um merge no seu objeto atual
import React, { Component } from "react";

class MyButton extends Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.handleClick(this.props.label);
        }}
      >
        {this.props.label}
      </button>
    );
  }
}

class MyLabel extends Component {
  render() {
    return <p>Cliquei no: {this.props.text}</p>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelText: ""
    };
  }

  setLabelText = labelText => {
    this.setState({ labelText });
  };
  render() {
    return (
      <div>
        <MyLabel text={this.state.labelText} />
        <MyButton handleClick={this.setLabelText} label="botao 1" />
        <MyButton handleClick={this.setLabelText} label="botao 2" />
        <MyButton handleClick={this.setLabelText} label="botao 3" />
        <MyButton handleClick={this.setLabelText} label="botao 4" />
      </div>
    );
  }
}

export default App;
