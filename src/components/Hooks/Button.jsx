import React from 'react'
import PropTypes from 'prop-types'


export function Button() {
    
    return (
        <button> Teste </button>
    )
} 
Button.propTypes = {
    label:PropTypes.string.isRequired,
}

Button.defaultProps = {
    label:'valor padrão'
}
    