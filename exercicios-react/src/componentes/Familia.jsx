import React from 'react'
import { filhosComprops, filhoscomProps } from '../utils/utils'

export default props =>
    <div>
        <h1>Família</h1>
       {filhoscomProps(props)}
       
       
{/*        
        {React.Children.map(props.children, child => {        primeiro parametro (todos os componentes filhos) , sehgundo parametro (uma callback) 
                return React.cloneElement(child, { ...props })
        }) }  
         */}
        
        {/* {React.cloneElement(props.children, { ...props })}    so funciona com 1 membro */}
        
        {/* {React.cloneElement(props.children, 
                { sobrenome: props.sobrenome })} */}
        
        {/* {props.children} */}
    </div>