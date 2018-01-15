import React from 'react'
import Comment from './Comment'

function CommentList(props) {
  const {comments} = props

  const commentList = comments.map((comment) => {
    return <Comment key={comment.id}
                    user={comment.user}
                    text={comment.text} />
  })

  return <div>
    <h3>Comments</h3>
    <div>
      {commentList}
    </div>
  </div>
}


export default CommentList
