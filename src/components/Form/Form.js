import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
    static propTypes = {
        action: PropTypes.string,
        action: PropTypes.string
    }

    static defaultProps = {
        action: null,
        method: null
    }

    render() {
        const attrs = {}
        if(this.props.action) attrs.action = this.props.action
        if(this.props.method) attrs.method = this.props.method

        return (
            <form {...attrs}>
                {this.props.children}
            </form>
        )
    }
}
export default Form