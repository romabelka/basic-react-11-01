import React, { Component } from 'react'
import Comment from '../Comment'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {commentsSelector} from '../../selectors'
import {loadCommentsPage} from '../../AC'
import {commentsTotal} from '../../selectors'
import {NavLink} from 'react-router-dom'

class CommentsPagination extends Component {
    static propTypes = {

    };

    componentDidMount() {
        const {loadCommentsPage} = this.props;
        //console.log('---total', comments.total)
        loadCommentsPage(`/api/comment?limit=5&offset=0`);
    }

    render() {
        const {comments, total} = this.props
        const number = 5;

        if (!comments.length) return <h3>loading...</h3>

        const commentElements = comments.map((comment) => <li key={comment.id}>
            {comment.text} <b>by {comment.user}</b>
        </li>)

        /*let pagination = [];

        for (let i = 0; i < total; i+5) {
            pagination.push(<NavLink to = {`/comment?limit=5&offset=${i}`} activeStyle = {{color: 'red'}}>{i}</NavLink>)
        }*/

        return (
            <div>
            <ul>
                
            </ul>
            <ul>
                {commentElements}
            </ul>
            </div>
        )
        /*return (
            <div>
                <h2>Comments: {comments.length}, {total}</h2>
            </div>
        )*/
    }

}

export default connect(state => {
    return {
        total: commentsTotal(state),
        comments: commentsSelector(state),
    }
}, {loadCommentsPage})(CommentsPagination)

