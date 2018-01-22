import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

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
        </div>
    )
}

CommentList.defaultProps = {
    comments: []
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string,
        text: PropTypes.string,
    }))
}

export default toggleOpen(CommentList)