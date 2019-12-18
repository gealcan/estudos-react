import React from 'react'
import ReactDOM from 'react-dom'

import Hook from './componentes/Hook'
// import Contador from './componentes/Contador'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Pai from './componentes/Pai'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Familia from './componentes/Familia'
// import Membro from'./componentes/Membro'
// import FamiliaSilva from './componentes/FamiliaSilva'
//import MultiElementos from './componentes/MultiElementos'
// import CompA, { CompB as B } from './componentes/DoisComponentes'
//import PrimeiroComponente from './componentes/PrimeiroComponente'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>   
            <Hook />
            {/* <Contador numero={0} /> */}
            {/* <ComponenteClasse valor="Sou um componente de classe!"/> */}
            {/* <Pai /> */}
            {/* <ComponenteComFuncao /> */}
            {/* <Familia sobrenome="Pereira" >
                <Membro nome="Andre"  />
                <Membro nome="Mariana"  />
            </Familia> */}
            {/* <FamiliaSilva sobrenome="Silva"/> */}
            {/* <Familia>
                <Membro nome="Bia" sobrenome="Arruda" />
                <Membro nome="Gustavo" sobrenome="Arruda" />
            </Familia> */}
            {/* <MultiElementos /> */}
            {/* <CompA valor="Olá, eu sou A!" />
            <B valor="B na área" /> */}
            {/* <PrimeiroComponente valor="Bom dia!"/> */}
    </div>
, elemento)



// const jsx = <h1>Ola React2</h1>
// ReactDOM.render(jsx, elemento)

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