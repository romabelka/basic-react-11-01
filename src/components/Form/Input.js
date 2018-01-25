import React, { Component } from 'react'
import PropTypes from 'prop-types'

function Input (props) {
    const {name, type, placeholder, onChange, value, invalid} = props
    const attrs = {
        type,
        value
    }

    if(name) attrs.name = name
    if(placeholder) attrs.placeholder = placeholder
    if(typeof onChange === 'function') attrs.onChange = onChange
    if(invalid) attrs.className = 'invalid'
    return (
        <input {...attrs} />
    )
}
export default Input

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
}
Input.defaultProps = {
    name: null,
    type: 'text',
    value: ''
}
