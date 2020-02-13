import ReactDOM from 'react-dom'
import React from 'react'


// import View from './components/PrimeiroComponente'
// import view from './components/PrimeiroComponenteArrow'
//import View from './components/PropsComponente'
//import { CompA, CompB } from './components/UmArquivoMultiComp'
//import View from './components/RetornaMultiElem'
//import View from './components/FamiliaSilva'
//import View from './components/Familia'
//import View from './components/Membro'
//import view from './components/ComponenteComFuncao'
//import View from './components/Pai'
//import View from './components/ComponenteClasse'
//import View from './components/Contador'
import View from './components/Hook'
//import View from './components/ContadorClass'

const elemento = document.getElementById('root')
//const jsx = <h1>Olá React2</h1>
ReactDOM.render(
        <div>
            <View/>
            {/* <CompA valor="Eu sou o A !" />
            <CompB valor="B na área!" /> */}
            
        </div>
    , elemento)