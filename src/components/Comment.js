import React from 'react'
import PropTypes from 'prop-types'
import MyTypes from '../types'

function Comment({comment}) {
    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

Comment.propTypes = {
    comment: MyTypes.CommentType
}

/*
Comment.defaultProps = {
    comment: {}
}
*/

export default Comment