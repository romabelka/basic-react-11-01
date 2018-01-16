import React, {Component} from 'react'
export Comment from './Comment'

class CommentsList extends Component {
    render({comments} = this.props) {
        const commentElements = comments.map( (comment) => 
            <Comment key= {comment.id} comment = {comment} />
        )

        return (
            <ul>
                {commentElements}
            </ul>
        )
    }
}

export default CommentsList