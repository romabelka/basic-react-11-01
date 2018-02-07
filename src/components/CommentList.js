import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import {loadComments} from '../AC'
import {commentListLoadingSelector, commentListLoadedSelector} from '../selectors'
import Loader from './common/Loader'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps({ isOpen, article, loadComments, loadded }) {
        if (!this.props.isOpen && isOpen) loadComments(article.id)
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
        const {article: { comments, id }, isOpen, loading, loadded} = this.props
        if (!isOpen) return null

        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment articleId = {id} id = {id} /></li>)}
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

    }
}, { loadComments })(toggleOpen(CommentList))