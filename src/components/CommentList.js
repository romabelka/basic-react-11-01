import React from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

function CommentList(props) {
  const {isOpen, toggleOpen} = props
  const text = isOpen ? 'hide comments' : 'show comments'
  return (
    <div>
      <button onClick={toggleOpen}>{text}</button>
      {getBody(props)}
    </div>
  )
}

function getBody(props) {
  const {comments, isOpen} = props
  if (!isOpen) return null
  
  const body = comments.length ? (
    <ul>
      {
        comments.map(comment => (
          <li key={comment.id}>
            <Comment comment={comment}/>
          </li>
        ))
      }
    </ul>
  ) : <h3>No comments yet</h3>
  
  return (
    <div>
      {body}
    </div>
  )
}

CommentList.propTypes = {
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
}

CommentList.defaultProps = {
  comments: [],
}


export default toggleOpen(CommentList)