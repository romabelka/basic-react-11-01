import React from 'react'
import PropTypes from 'prop-types'


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
	comment: PropTypes.object.isRequired
}
 
export default Comment