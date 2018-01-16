import React, { Component } from 'react'
import Comment from './Comment'

class CommentsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }
    }

    render() {
        const commentElements = this.state.isOpen && (this.props.comments ? this.props.comments.map((comment, index) => <li key = {comment.id}>
            <Comment comment = {comment} />
        </li>) : <h3>No one has posted a comment yet</h3>)

        return (
            <div>
                <h3>Comments
                    <button onClick = {this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h3>
                <ul>
                    {commentElements}
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

export default CommentsList