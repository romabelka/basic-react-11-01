import React, {Component} from 'react'
export Comment from './Comment'

class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isCommentsShown: false
        }
    }

    render({comments} = this.props) {

        const commentBtn = comments && 
        <button onClick={this.handleClick}> 
            {this.state.isCommentsShown ? 'Hide' : 'Comments: ' + comments.length } 
        </button>

        const commentList = this.state.isCommentsShown && 
        comments.map( (comment) => <Comment key= {comment.id} comment = {comment} /> )

        return (
            <div>
                {commentBtn}
                {commentList}
            </div>
        )
    }

    handleClick = () => {
        this.setState( (state) => ({
            isCommentsShown: !state.isCommentsShown
        }) )
    }
}

export default CommentList