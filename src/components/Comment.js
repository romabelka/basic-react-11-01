import React from 'react'
import PropTypes from 'prop-types'

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        text: PropTypes.string
    })
}

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