import React from 'react'

const Comment = ({ comment }) => (
    <div>
        <p><b>{comment.user}</b></p>
        <p>{comment.text}</p>
    </div>
)

export default Comment