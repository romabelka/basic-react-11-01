import React from 'react'

const Comment = ({user, text}) => (
  <div className='mt3 flex'>
    <div className='mr3 fw6 black'>{user}</div>
    <div>{text}</div>
  </div>
)

export default Comment