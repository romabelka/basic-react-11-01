import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class TextArea extends Component {
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        label: PropTypes.string
    };

    state = {
        text: ''
    }

    render() {
        const validClass = ((this.state.text.length >= this.props.min) && (this.state.text.length < this.props.max)) ? "valid" : "invalid"
        const {label} = this.props
        return (
            <div>
                {label} <textarea value = {this.state.text} onChange = {this.handleChange} className = {validClass}/>
            </div>
        )
    }

    handleChange = ev => {
        const text = ev.target.value
        if (text.length > this.props.max) return

        this.setState({ text })
    }
}

export default TextArea