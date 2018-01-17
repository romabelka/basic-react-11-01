import React, {Component} from 'react'

function Comment ({comment}) {
  return (
    <li>
      <p>{comment.text}</p>
      Comment by: <strong>{comment.user}</strong>
    </li>
  )
}

export default Comment
