import React from 'react'
import Membro from './Membro'

export default props =>
    <div>
        <Membro nome="João" sobrenome={props.sobrenome}/>
        <Membro nome="Monica" sobrenome={props.sobrenome}/>
        <Membro nome="Maria" sobrenome={props.sobrenome}/>
        <Membro nome="Ana" sobrenome={props.sobrenome}/>
    </div>