import React, {Component} from 'react'

class Comment extends Component {

    render() {
        const {comment} = this.props
        const commentElement = <q>{comment.text}</q>;

        return (
            <p>
                {commentElement}
                <br/><i>Author: {comment.user}</i>
            </p>
        )
    }
}


export default Comment