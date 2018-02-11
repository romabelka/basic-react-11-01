import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import Loader from './common/Loader'
import {loadCommentPage} from '../AC'
import {connect} from 'react-redux'
import {commentPageSelector} from '../selectors'

class CommentPage extends Component {
    static propTypes = {
    }

    componentDidMount() {
        const { number, limit, page, loadCommentPage } = this.props
        if (!page || !page.commentsLoaded) loadCommentPage({number, limit})
    }

    render() {
        return (
            <div>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { page } = this.props
        if (page && page.commentsLoading) return <Loader />
        if (!page || !page.commentsLoaded) return null

        const body = page.comments.length ? (
            <ul>
                {page.comments.map(comment => <li key = {comment.id}><Comment id = {comment.id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
            </div>
        )
    }
}

export default connect((state, ownProps) => {
    return {
        page: commentPageSelector(state, ownProps),
    }
}, { loadCommentPage })(CommentPage)