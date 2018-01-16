import React, {Component} from 'react'

class Comments extends Component {
    state = {
        isOpen: true
    }

    render() {
        const commentsList = this.state.isOpen && this.props.comments.map(comment => <li key={comment.id}>
            <p>{comment.user}</p>
            <p>{comment.text}</p>
        </li>)
        return (
            <div>
                <h3>Comments</h3>
                <button onClick={this.handleClick}>
                    {this.state.isOpen ? 'close' : 'open'}
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

export default Comments