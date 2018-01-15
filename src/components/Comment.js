import React from 'react'

function Comment(props) {
  const {user, text} = props

  return <div>
    <div>
      <b>Author: </b> {user}
      <p>{text}</p>
    </div>
  </div>
}

export default Comment
