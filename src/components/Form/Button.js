import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
    static propTypes = {
        caption: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }

    static defaultProps = {
        caption: 'button',
        type: 'button'
    }

    state = {
        status: false
    }

    render() {
        return (
            <button type={this.props.type} onClick={this.handleClick}>{this.props.caption}</button>
        )
    }

    handleClick = ev => {
        this.setState({ status: true })
    }
}
export default Button