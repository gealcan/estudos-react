import ReactDOM from 'react-dom'
import React from 'react'

const elemento = document.getElementById('root')
const jsx = <h1>Ola React2</h1>
ReactDOM.render(jsx, elemento)



// ReactDOM.render(
//     <ul>
//         <li>1) Pedro</li>
//         <li>2) Maria</li>
//         <li>3) Ana</li>
//     </ul>
// , elemento)


// ****** Codigo acima em jsx extremamente simples e menos trrabalhoso
//******** Pensa no trabalho para fazer uma lista na mão :



// const lista = document.createElement('ul')

// let item = document.createElement('li')
// let texto = document.createTextNode('1) Pedro')
// item.appendChild(texto)
// lista.appendChild(item)

// item = document.createElement('li')
// texto = document.createTextNode('2) Maria')
// item.appendChild(texto)
// lista.appendChild(item)

// item = document.createElement('li')
// texto = document.createTextNode('3) Ana')
// item.appendChild(texto)
// lista.appendChild(item)


// const elemento = document.getElementById('root')
// elemento.appendChild(lista)










//ReactDOM.render('Olá React', elemento)