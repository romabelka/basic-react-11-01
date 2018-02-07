import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {commentSelectorId} from '../selectors'

function Comment({comment}) {
  


    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

Comment.propTypes = {
    id: PropTypes.string,
    
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

// const createMapStateToProps = () => {
//     const commentSelector = createCommentSelector()
//     return (state, ownProps) => {
//         return {
//             comment: commentSelector(state, ownProps)
//         }
//     }
// }

export default connect (  ( state, ownProps )  => {
    return {
        comment: commentSelectorId( state, ownProps )
    }
}   )   (Comment)