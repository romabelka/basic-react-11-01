import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {commentsSelector} from '../../selectors'
import {loadCommentsPage} from '../../AC'
import {propTypes} from 'prop-types'

class Comment extends Component {
    static propTypes = {

    };

    componentDidMount() {
        const {loadCommentsPage, page} = this.props;
        const offset = 5*page
        loadCommentsPage(`/api/comment?limit=5&offset=${offset}`);
    }

    render() {
        const {comments} = this.props

        if (!comments.length) return <h3>loading...</h3>

        const commentElements = comments.map((comment) => <li key={comment.id}>
            {comment.text} <b>by {comment.user}</b>
        </li>)

        return (
            <ul>
                {commentElements}
            </ul>
        )
    }
}

export default connect(state => {
    return {
        comments: commentsSelector(state),
    }
}, {loadCommentsPage})(Comment)

