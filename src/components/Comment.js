import React from 'react'

const Comment = props => {
  const {user, text} = props.comment

  return <div><strong>{user}</strong><p>{text}</p></div>
}

export default Comment
