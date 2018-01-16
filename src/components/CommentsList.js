import React, {Component} from 'react'

import Comment from './Comment'

class CommentsList extends Component {
  state = {
    isExpanded: false,
  }

  handlerToggleComments = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }
  
  render() {
    const {comments} = this.props
    const commentsList = comments && (
      <ul className='list mt3 pa0'>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            user={comment.user}
            text={comment.text}
          />
        ))}
      </ul>
    )
    const commentsListBody = comments && (
      <div className='mt3'>
        <button onClick={this.handlerToggleComments} className='br2 bn ph2 pv1 bg-green white f5'>
          {this.state.isExpanded ? 'Hide Comments' : 'Show Comments'}
        </button>
        {
          this.state.isExpanded && commentsList
        }
      </div>
    )
    const noCommentsYet = <p>No comments yet!</p>
    return (
      <div>
        {
          commentsList ? commentsListBody : noCommentsYet
        }
      </div>
    )
  }
}

export default CommentsList