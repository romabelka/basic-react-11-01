import React, { Component } from 'react';

class Comment extends Component {

    render() {
        const {comment} = this.props;

        return (
            <div>
                <h4>{comment.user}</h4>
                <p>{comment.text}</p>
            </div>
        );

    }
}

export default Comment;
