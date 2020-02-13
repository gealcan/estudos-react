import React from 'react'



export default props => {
    const aprovados = ['Ana', 'Bia', 'Lia', 'Bela']
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }
    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
        
}