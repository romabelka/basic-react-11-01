import React, { Component } from 'react'

class UserForm extends Component {
    static propTypes = {

    };

    state = {
        user: ''
    }

    render() {
        return (
            <div>
                Username: <input type = "text" value = {this.state.user} onChange = {this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => {
        const user = ev.target.value
        if (user.length > 10) return

        this.setState({ user })
    }
}

export default UserForm