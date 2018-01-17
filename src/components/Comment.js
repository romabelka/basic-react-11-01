import React, {Component} from 'react'

class Comment extends Component {

    render() {
        const {comment} = this.props
        return (
            <div>
                <b>{comment.user} </b>
                wrote:
                <p><i>{comment.text}</i></p>
            </div>
        )
    }
}

export default Comment