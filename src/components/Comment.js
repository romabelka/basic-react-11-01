import React from 'react'
import PropTypes from 'prop-types'

Comment.defaultProps = {
    comment: {}
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
    })
}

function Comment({comment}) {
    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

export default Comment