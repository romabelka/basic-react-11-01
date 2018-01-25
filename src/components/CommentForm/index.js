import React, { Component } from 'react'
import './style.css'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        text: '',
        user: ''
    }

    render() {
        return (
            <div className = "commentForm">
                <form>
                    <p>Your name:</p>
                    <p><input type = 'text' value = {this.state.user} onChange = {this.handleChangeUserName}/></p>
                    <p>Your comment:</p>
                    <p><textarea cols = '90' rows = '5' value = {this.state.text} onChange = {this.handleChangeCommentText}/></p>
                    <p>Your comment length: {this.state.text.length}</p>
                    <p><input type = 'button' value = 'Leave comment' onClick = {this.validateChanges}/></p>
                </form>
            </div>
        )
    }

    handleChangeCommentText = ev => {
        const text = ev.target.value
        if (text.length > 50 || text.length < 10) {
          // I have no idea how to do that

        }

        this.setState({ text })
    }

    handleChangeUserName = ev => {
        const user = ev.target.value

        this.setState({ user })
    }

    validateChanges = ev => {

    }
}

export default CommentForm