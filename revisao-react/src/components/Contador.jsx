import React, { Component } from 'react'

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }


    maisUm = () => {
       
       this.setState({ numero: this.state.numero + 1 })
        // this.props.numero = this.props.numero + 1
        
    }

    menosUm = () => {
       
        this.setState({ numero: this.state.numero - 1 })
         // this.props.numero = this.props.numero + 1
         
     }

     alterarNumero = diferenca => {
       
        this.setState({ numero: this.state.numero + diferenca })
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



//Solucao 3 , transformar maisUm em funçao Arrow
// maisUm = () => {
//     // this.props.numero++
//     console.log(this)
// }


//Segunda soluçao com Arrow function
//<button onClick={() => this.maisUm()}>Inc</button>

// Primeira solucao pro this ( mais trabalhosa)
// constructor(props) {
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }