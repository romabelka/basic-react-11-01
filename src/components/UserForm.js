import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {getLocaleText} from './utils'

class UserForm extends Component {
    static propTypes = {

    };

    static contextTypes = {
        locale: PropTypes.object
    }

    state = {
        user: ''
    }

    render() {
        const {value} = this.props
        return (
            <div>
                {getLocaleText(this)('Username')}: <input type = "text" value = {value} onChange = {this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => this.props.onChange(ev.target.value)
}

export default UserForm