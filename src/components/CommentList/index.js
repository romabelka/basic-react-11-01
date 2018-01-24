import React from 'react'
import PropTypes from 'prop-types'
import Comment from '../Comment'
import AddCommentForm from '../AddCommentForm'
import toggleOpen from '../../decorators/toggleOpen'

function CommentList(props) {
    const {isOpen, toggleOpen} = props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody(props)}
        </div>
    )
}

function getBody(props) {
    const {comments, isOpen} = props
    if (!isOpen) return null

    const body = comments.length ? (
        <ul>
            {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
        </ul>
    ) : <h3>No comments yet</h3>

    return (
        <div>
            {body}
            <AddCommentForm />
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

CommentList.defaultProps = {
    comments: []
}


export default toggleOpen(CommentList)