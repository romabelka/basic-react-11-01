import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
    static propTypes = {
        label: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string.isRequired
    }

    static defaultProps = {
        label: null,
        name: null,
        type: 'text'
    }

    state = {
        value: ''
    }

    render() {
        const label = this.props.label && (<label>{this.props.label}</label>);
        const attrs = {
            type: this.props.type
        }
        if(this.props.name) {
            attrs.name = this.props.name
        }
        return (
            <div>
                {label}<input {...attrs} value={this.state.user} onChange= {this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => {
        const value = ev.target.value
        this.setState({ value })
    }
}
export default Input