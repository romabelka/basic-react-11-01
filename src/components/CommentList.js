import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import Comment from './Comment'
import {connect} from 'react-redux'
import toggleOpen from '../decorators/toggleOpen'
import {commentsSelector, commentsLoadingSelector, commentsLoadedSelector} from '../selectors'
import {loadComments} from '../AC'
import Loader from './common/Loader'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps({isOpen, article, loadComments}) {
        if (!this.props.isOpen && isOpen && !article.commentsLoaded) {
            loadComments(article.get('id'))
        }
    }

    render() {
        
        const {isOpen, toggleOpen, comments} = this.props

        const text = isOpen ? 'hide comments' : 'show comments'

        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article, comments, loading, loaded, isOpen} = this.props
       
        if (!isOpen) return null
        if (loading) return <Loader />

        const body = comments.length ? (
            <ul>
                {comments.map(comment => <li key = {comment['id']}><Comment id = {comment['id']} comment = {comment} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {article.get('id')} />
            </div>
        )
    }
}
// const commentList = toggleOpen(CommentList)

export default connect(state => {
    return {
        comments: commentsSelector(state),
        loading: commentsLoadingSelector(state),
        loaded: commentsLoadedSelector(state)
    }
}, { loadComments })(toggleOpen(CommentList))