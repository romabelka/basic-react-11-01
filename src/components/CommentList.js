import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        isOpen: false
    }
    render() {
        const {comments} = this.props.article

        if (!comments) return (
            <div>
                <p><i>No comments</i></p>
            </div>
        )

        const commentsList = this.state.isOpen && comments.map(comment => <li key = {comment.id}>
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