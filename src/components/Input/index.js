import React, { Component } from 'react'
import PropTypes from 'prop-types'
import validate from '../../decorators/validate'
import './style.css'

class Input extends Component {
    static propTypes = {
        fieldType: PropTypes.string,
        label: PropTypes.string,
        onChange: PropTypes.func,
        valid: PropTypes.bool,
        value: PropTypes.string
    }

    static defaultProps = {
        label: 'Your text',
        fieldType: 'input'
    }

    render() {
        const {label, value, onChange, fieldType, valid} = this.props
        const body = fieldType === 'textarea' ? (
            <label>
                {label}: <textarea type = "text" value={value} onChange={onChange} className={valid ? 'valid' : 'invalid'}/>
            </label>
        ) : (
            <label>
                {label}: <input type = "text" value={value} onChange={onChange} className={valid ? 'valid' : 'invalid'}/>
            </label>
        )

        return (
            <div>
                {body}
            </div>
        )
    }
}

export default validate(Input)