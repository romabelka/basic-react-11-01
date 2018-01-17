import React, {Component} from 'react'

class Comment extends Component {
    render() {
        const {comment} = this.props
        return (
            <div>
                <h3>{comment.user}</h3>
                <section>{comment.text}</section>
            </div>
        )
    }
}


export default Comment