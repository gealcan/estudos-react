import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',    // valor que aparece no display
    clearDisplay: false,  // limpar display
    operation: null,    //   armazena operação
    values: [0, 0],   // array com os dois valores
    current: 0    // para saber qual indice esta manipulando
}

export default class Calculator extends Component {

    state = { ...initialState }   // para startar p estado inicial

    clearmemory() {
        this.setState({ ...initialState })

    }

    setOperation(operation) {
        console.log(operation)
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true})
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e) {
                values[0] = this.state.values[0]
            }
            
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values


            })
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {  // se o usuario digitar ponto pela segunda vez, o display nao retorna nada
            return   
        }

        const clearDisplay = this.state.displayValue === '0'   // limpar display quando tiver 0 ou quando clearDisplay for true
            || this.state.clearDisplay
        
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false})
        
        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }

    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={() => this.clearmemory()} triple />
                <Button label="/" click={setOperation} operation/>
                <Button label="7" click={addDigit}/>
                <Button label="8" click={addDigit}/>
                <Button label="9" click={addDigit}/>
                <Button label="x" op={"*"} click={setOperation} operation/>
                <Button label="4" click={addDigit}/>
                <Button label="5" click={addDigit}/>
                <Button label="6" click={addDigit}/>
                <Button label="-" click={setOperation} operation/>
                <Button label="1" click={addDigit}/>
                <Button label="2" click={addDigit}/>
                <Button label="3" click={addDigit}/>
                <Button label="+" click={setOperation} operation/>
                <Button label="0" click={addDigit} double/>
                <Button label="." click={addDigit}/>
                <Button label="=" click={setOperation} operation/>
            </div>
        )
    }
}