import React, { Component } from 'react'

class Comment extends Component {

    render() {
        const {comment} = this.props

        return (
            <div>
                <h5>{comment.user}</h5>
                <span>{comment.text}</span>
            </div>

        )
    }
}

export default Comment