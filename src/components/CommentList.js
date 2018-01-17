import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        isOpen: false
    }
    render() {
        const commentsList = this.state.isOpen && this.props.article.comments.map(comment => <li key = {comment.id}>
            <Comment comment = {comment}/>
        </li>)
        return (
            <div>
                <button onClick = {this.handleClick}>
                    {this.state.isOpen ? 'Close comments' : 'Open comments'}
                </button>
                <ul>
                    {commentsList}
                </ul>
            </div>
        )
    }

    handleClick = () => {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }))
    }
}


export default CommentList