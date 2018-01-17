import React, {Component} from 'react'

class Comment extends Component {
    render() {
        const {comment} = this.props
        return (
            <div>
                <p>{comment.user}</p>
                <p>{comment.text}</p>
            </div>
        )
    }
}

export default Comment