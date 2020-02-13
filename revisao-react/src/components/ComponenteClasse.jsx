import React, { Component } from 'react'

export default class ComponenteClasse extends Component {
    render() {
        return (
            <h1>{this.props.valor || 'Padrão'}</h1>
            // <h1> Olá , eu sou componente de Classe </h1>
        )
        
    }
}