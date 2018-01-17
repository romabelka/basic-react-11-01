import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        isShown: false
    }

    render() {
        const comments = this.props.comments
        const commentElements = comments ? comments.map((comment, index) => <li key={comment.id}>
            <Comment comment = {comment} />
        </li>) : 'no comments'
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isShown ? 'close comments' : 'open comments'}
                </button>
                <ul>
                    {this.state.isShown ? commentElements : ''}
                </ul>
            </div>
        )
    }

    handleClick = () => {
        this.setState((state) => ({
            isShown: !state.isShown
        }))
    }
}

export default CommentList