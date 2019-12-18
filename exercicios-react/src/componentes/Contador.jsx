import React, { Component } from 'react'

export default class Contador extends Component {
        state = {
            numero: 0
        }
     

        maisUm = () => {
            this.alterarNumero(1)
                //this.setState({ numero: this.state.numero + 1 })
                //this.state.numero = this.state.numero + 1
        }

        menosUm = () => {
            this.setState({ numero: this.state.numero - 1 })
        }

        alterarNumero = (diferenca) => {
            this.setState({ 
                numero: this.state.numero + diferenca
            })
        }
    
    
        render() {
            return (
                <div>
                    <div>Número: {this.state.numero}</div>
                    <button onClick={this.maisUm}>Inc</button>
                    <button onClick={this.menosUm}>Dec</button>
                    <button onClick={() => this.alterarNumero(10)}>Inc10</button>
                    <button onClick={() => this.alterarNumero(-10)}>Dec10</button>
                </div>
            )
        }
}


//SOLUÇÃO 01 - Função Bind
// constructor(props) {
        //     super(props)
        //     this.maisUm = this.maisUm.bind(this)
        // }


//SOLUÇÃO 02 - Função Arrow (onclick)
//<button onClick={() => this.maisUm()}>Inc</button>

//SOLUÇÃO 03 - Função Arrow
// maisUm = () => {
//     // this.props.numero++  // undefined, pois o this se refere a quem esta chamando a funçao, no caso o browser a partir do evento do
//     console.log(this)       //  Nao se altera props, para fazer isso criou-se STATE
// }