import React, {Component} from 'react';
import Comment from './Comment'

class CommentsList extends Component {
    state = {
        isOpen: false
    }

    render() {
        const { comments } = this.props

        if (!comments) return null

        const commentsElements = comments && comments.map(comment => <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        )

        return (
          <div>
            <button onClick={this.handleClick}>
                {
                    this.state.isOpen ? 'Close comments' : 'Open comments'
                }
            </button>
            <ul>
                {this.state.isOpen ? commentsElements : null}
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
