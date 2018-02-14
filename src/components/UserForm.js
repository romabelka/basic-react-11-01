import React, { Component } from 'react'
import PropTypes from 'prop-types'
import dictionary from '../dictionary';

class UserForm extends Component {
    static propTypes = {

    };

    state = {
        user: ''
    }

    static contextTypes = {
        dictionary: PropTypes.object
    }

    render() {
        const {value} = this.props
        return (
            <div>
                {this.context.dictionary.USERNAME}: <input type = "text" value = {value} onChange = {this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => this.props.onChange(ev.target.value)
}

export default UserForm