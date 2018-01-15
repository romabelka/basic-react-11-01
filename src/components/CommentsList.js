import React, { Component } from 'react';
import Comment from './Comment';
class CommentsList extends Component {

    render() {
        const { comments } = this.props;
        const commentElements = comments.map((comment, index) => <li key={comment.id}> <Comment comment = {comment} /> </li>);

        return (
            <ol>
                {commentElements}
            </ol>
        )
    }
}

export default CommentsList;