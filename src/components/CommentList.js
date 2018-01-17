import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    render() {
        const commentElements = this.props.comments.map((comment, index) => <li key={comment.id}>
            <Comment comment = {comment} />
        </li>)
        return (
            <ul>
                {commentElements}
            </ul>
        )
    }
}

export default CommentList