import React, { Component } from 'react'
import './style.css'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        comment: ''
    }

    render() {
        console.log (this.props)
        return (
            <fieldset>
                <legend>Add a comment:</legend>
                Your name: <input type="text" name = "user" value = {this.state.user} onChange = {this.handleInputChange} />
                <br/>
                Your comment: <textarea type="text" name = "comment" value = {this.state.comment} onChange = {this.handleInputChange} />
                <br/>
                <input type="submit" value = "Submit" onClick={this.handleClick} />
            </fieldset>
        )
    }

    handleInputChange = (ev) => {
        const target = ev.target
        const name = target.name
        const value = target.value
        this.setState({[name]: value})
        this.validateLength(value.length) ? target.className = '' : target.className = 'input-invalid'
    }

    handleClick = ev => {
        const userLength = this.state.user.length
        const commentLength = this.state.comment.length
        this.validateLength(userLength) && this.validateLength(commentLength) ? console.log('---', 'Success!') 
        : console.log('---', 'Invalid input')
    }

    validateLength = (length) => {
        return length >= 10 && length <= 50  
    }
}

export default CommentForm