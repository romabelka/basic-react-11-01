import React from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD

=======
>>>>>>> ea4c1ecc0f66bee52e07e5405182d36a6c39aac9

function Comment({comment}) {
    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

Comment.propTypes = {
	comment: PropTypes.object.isRequired
}
 
export default Comment