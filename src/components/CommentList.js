import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }
    render() {
        const { isOpen } = this.state
        const comments = this.props.comments.map(comment => (<Comment comment={comment} key={comment.id} />))
        const body = isOpen && <div>{comments}</div>
        return (
            <div>
                {body}
                <button onClick={this.handleClick}>{isOpen ? 'Hide' : 'Show'} comments</button>
            </div>
        )
    }

    handleClick = () => {
        this.setState(state => ({
            isOpen: !state.isOpen
        }))
    }
}

export default CommentList