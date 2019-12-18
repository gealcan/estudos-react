import React, { useState, useEffect } from 'react'

export default props => {
        const [contador, setContador] = useState(100)// nao incrementa pois componente funcional nao tem state usa-se os HOOKS
                                                    // useState com estado inicial e aprtir dele usa um destructruinh com 2 parametros o valor que vai usar dentro do xomponente para ler o estado e a funçao para mudar o valor

        const [status, setParouimpar] = useState('Par')
        
        useEffect(() => {
            contador %2 === 0 ? setParouimpar('Par') : 
                setParouimpar('Impar')
        })

        return (
            <div>
                <h1>{contador}</h1>
                <h3>{status}</h3>
                <button onClick={() => setContador(contador + 1)}>
                    Inc
                </button>
                <button onClick={() => setContador(contador - 1)}>
                    Dec
                </button>
            </div>
        )
}