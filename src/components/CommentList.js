import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentForm from './CommentForm'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import { loadComments } from '../AC'
import Loader from './common/Loader'
import { commentsLoadingSelector, commentListSelector, commentsLoadedIDSelector } from '../selectors'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps({ isOpen, article, loadComments }) {
        console.log(this.props.loadedID)
        if (!this.props.isOpen && isOpen && (this.props.loadedID != article.id)) loadComments(article.id)
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
        const { comments, article: { id }, isOpen, loading, loaded} = this.props

        if (!isOpen) return null

        if (loading) return <Loader />

        const body = comments.length ? (
            <ul>
                {comments.map(item => <li key = {item.id}><Comment id = {item.id} /></li>)}
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


export default connect(state => {
    return {
        loading: commentsLoadingSelector(state),
        loadedID: commentsLoadedIDSelector(state),
        comments: commentListSelector(state)
    }
}, {loadComments})(toggleOpen(CommentList))