import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class UserForm extends Component {
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    };

    state = {
        user: ''
    }

    render() {
        const validClass = ((this.state.user.length >= this.props.min) && (this.state.user.length < this.props.max)) ? "valid" : "invalid"

        return (
            <div>
                Username: <input type = "text" value = {this.state.user} onChange = {this.handleChange} className = {validClass}/>
            </div>
        )
    }

    handleChange = ev => {
        const user = ev.target.value
        if (user.length > this.props.max) return

        this.setState({ user })
    }
}

export default UserForm