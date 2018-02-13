import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    static propTypes = {

    }

    static contextTypes = {
        dictionary: PropTypes.object
    }

    state = {
        user: ''
    }

    render() {
        const {value} = this.props
        return (
            <div>
                {this.context.dictionary.Username}: <input type = "text" value = {value} onChange = {this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => this.props.onChange(ev.target.value)
}

export default UserForm