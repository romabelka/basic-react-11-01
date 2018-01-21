import React from 'react'
import PropTypes from 'prop-types'

PropTypes.shape.Comment = PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string,
    text: PropTypes.string
}).isRequired

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

Comment.propTypes = {
    article: PropTypes.shape.Comment
}

export default Comment
