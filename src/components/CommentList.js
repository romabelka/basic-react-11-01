import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import Comment from './Comment'
import {connect} from 'react-redux'
import toggleOpen from '../decorators/toggleOpen'
import {loadComments} from '../AC'
import Loader from './common/Loader'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps({isOpen, loadComments, article:{commentsLoading, commentsLoaded, id}}) {
            if (isOpen && !commentsLoaded && !commentsLoading) loadComments(id)
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'

        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article: {id, comments, commentsLoaded, commentsLoading}, isOpen} = this.props
       
        if (!isOpen) return null
        if (commentsLoading || !commentsLoaded) return <Loader/>

        const body = comments.length ? (
            <ul>
                 {comments.map(id => <li key={id}> <Comment id={id}/> </li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {id} />
            </div>
        )
    }
}

export default toggleOpen(CommentList)