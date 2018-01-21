import React from 'react'

function Comment({comment}) {
    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

/*
Comment.defaultProps = {
    comment: {}
}
*/

export default Comment