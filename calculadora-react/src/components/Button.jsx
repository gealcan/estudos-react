import React from 'react'
import './Button.css'

export default props => {
let operation = "";

if (props.op) {
    operation = props.op;
} else {
    operation = props.label;
}
    
    return (
    <button 
        onClick={e => props.click && props.click(operation)}
        className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}>
        
        {props.label}
        </button>
    )
}