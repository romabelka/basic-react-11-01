import React, { Component } from 'react'
import Comment from './Comment'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {commentsTotal} from '../../selectors'
import {NavLink} from 'react-router-dom'
import {propTypes} from 'prop-types'

class CommentsPagination extends Component {
    static propTypes = {

    };

    render() {
        const {comments, total} = this.props
        let pagination = [];

        for (let i = 0; i < total; i += 5) {
            pagination.push(<li key={i}>
                <NavLink to = {`/comments/${i/5 + 1}`} activeStyle = {{color: 'red'}}>{i/5 + 1}</NavLink>
            </li>)
        }

        return (
            <div>
                <ul>
                    {pagination}
                </ul>
                <Route path = {`/comments/:page`} children = {this.getComment} />
            </div>
        )
    }

    getComment = ({ match }) => {
        console.log('match', match);
        if (!match) return <h2>Please select an comment</h2>
        return <Comment page = {match.params.page - 1} key = {match.params.page} />
    }
}

export default connect(state => {
    return {
        total: commentsTotal(state),
    }
})(CommentsPagination)

