import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import Loader from './common/Loader'
import {connect} from 'react-redux'
import {loadArticleComments} from '../AC'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        user: PropTypes.string,
        dictionary: PropTypes.object
    }

    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    render() {
        console.log('---', 'context: ', this.context)
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                <h2>User: {this.context.user}</h2>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article: {comments, id, commentsLoading, commentsLoaded}, isOpen } = this.props
        if (!isOpen) return null
        if (commentsLoading) return <Loader />
        if (!commentsLoaded) return null

        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
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


export default connect(null, { loadArticleComments }, null, { pure: false })(toggleOpen(CommentList))