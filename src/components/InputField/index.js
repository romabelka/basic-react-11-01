import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

class InputField extends Component {
  static propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf([
      'text',
      'textarea',
    ]),
    placeholder: PropTypes.string,
    value: PropTypes.string,
  }
  
  static defaultProps = {
    label: 'Some label',
    type: 'text',
    placeholder: 'Some placeholder',
  }
  
  state = {
    inputValue: '',
    isValid: true,
  }
  
  handlerValue = (ev) => {
    const value = ev.target.value
    if (value.length > 50) {
      return
    }
    this.setState({
      inputValue: value,
      isValid: (!value.length || value.length > 10 && value.length < 50),
    })
  }
  
  render() {
    const { label, type, placeholder } = this.props
  
    return (
      <div className='input-field-holder'>
        <label>{label}:</label>
        {
          type === 'textarea' ?
            <textarea
              placeholder={placeholder}
              value={this.state.inputValue}
              onChange={this.handlerValue}
              className={`input-field ${!this.state.isValid ? 'not-valid' : ''}`}
            /> :
            <input
              placeholder={placeholder}
              value={this.state.inputValue}
              onChange={this.handlerValue}
              className={`input-field ${!this.state.isValid ? 'not-valid' : ''}`}
            />
        }
      </div>
    )
  }
}

export default InputField