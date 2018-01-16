import React from 'react'

const Comment = ({user, text}) => (
  <div>
    <div>{user}</div>
    <div>{text}</div>
  </div>
)

export default Comment