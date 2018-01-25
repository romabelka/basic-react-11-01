import React, { Component } from 'react'
import './style.css'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        text: '',
        user: '',
        isValidText: true,
        isValidUser: true
    }

    render() {
        return (
            <div className = "commentForm">
                <form>
                    <p>Your name:</p>
                    <p><input
                        type = 'text'
                        className = {this.state.isValidUser ? '' : 'invalid'}
                        name = 'user'
                        value = {this.state.user}
                        onChange = {this.handleChange}/></p>
                    <p>Your comment:</p>
                    <p><textarea
                        cols = '90'
                        className = {this.state.isValidText ? '' : 'invalid'}
                        name = 'text'
                        rows = '5'
                        value = {this.state.text}
                        onChange = {this.handleChange}/></p>
                    <p>Your comment length: {this.state.text.length}</p>
                    <p><input type = 'button' value = 'Leave comment' onClick = {this.validateChanges}/></p>
                </form>
            </div>
        )
    }

    handleChange = (ev) => {
        const name = ev.target.name
        const value = ev.target.value

        this.setState({[name]: value});
    }

    validateChanges = () => {
        if (this.state.user.length < 10 || this.state.user.length > 50) {
            this.setState({isValidUser: false})
        } else {
            this.setState({isValidUser: true})
        }

        if (this.state.text.length < 10 || this.state.text.length > 50) {
            this.setState({isValidText: false})
        } else {
            this.setState({isValidText: true})
        }


    }
}

export default CommentForm