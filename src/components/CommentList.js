import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import {addComment} from '../AC'
import { connect } from 'react-redux'


class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const {comments, isOpen, toggleOpen} = this.props
        
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, isOpen, article, addComment} = this.props
        
        if (!isOpen) return null

        const body = comments ? (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment id = {comment.id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm  articleId = {article.id} addComment = {addComment}/>
            </div>
        )
    }
}


export default connect((state, { article }) => {
   if (article.comments) {
        return {
            comments: article.comments.map(id => state.comments[id])
        }
    } else {
        return {
            comments: undefined
        }
    }
}, {
    addComment
})(toggleOpen(CommentList))