import React, { Component } from 'react'

class UserForm extends Component {
    static propTypes = {

    };

    state = {
        user: ''
    }

    render() {
        const {value} = this.props
        return (
            <div>
                Username: <input type = "text" value = {value} onChange = {this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => this.props.onChange(ev.target.value)
}

export default UserForm