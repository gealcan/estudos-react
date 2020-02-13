import React, { Component } from 'react'

class Contador extends Component {

    state = {
        contador: 0
    }

    handleContador = () => {
        this.setState({
            contador: this.state.contador + 1
        })
    }
    
    render() {
        return(
            <div>
    <h1>Contador:  {this.state.contador}</h1>
                <button onClick={this.handleContador}>+</button>
            </div>
        )
    }
}

export default Contador