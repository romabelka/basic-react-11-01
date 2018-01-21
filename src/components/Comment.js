import React from 'react'
import PropTypes from 'prop-types';

function Comment({comment}) {
    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}


Comment.propTypes = PropTypes.shape({
  text: PropTypes.string,
  user: PropTypes.string
}).isRequired;


export default Comment
