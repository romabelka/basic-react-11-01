import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import { loadAllComments } from '../AC';
import { connect } from 'react-redux';
import Loader from './common/Loader';
import { commentListSelector } from '../selectors';
import { commentsLoadingSelector } from '../selectors/';

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
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

    componentWillReceiveProps(nextProps) {
        if(!this.props.comments.loaded && nextProps.isOpen && !this.props.isOpen) {
            const { loadAllComments } = this.props;
            loadAllComments(this.props.article.id);
        }
    }

    getBody() {
        const {article: { id: articleId }, comments, isOpen, loading, error } = this.props
        if (!isOpen) return null
        if(loading) return <Loader />
        if(error) return <h3>Error</h3>

        const body = comments.entities.size > 0 ? (
            <ul>
                {comments.entities.valueSeq().map(comment => <li key = {comment.id}><Comment comment={comment} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {articleId} />
            </div>
        )
    }
}


export default connect(state => ({
    loading: commentsLoadingSelector(state),
    comments: commentListSelector(state),
}), {loadAllComments})(toggleOpen(CommentList));