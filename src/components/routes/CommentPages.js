import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from '../common/Loader'
import {NavLink} from 'react-router-dom'
import CommentPage from '../CommentPage'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadCommentPages} from '../../AC'
import {commentPagesTotalSelector} from '../../selectors'

class CommentPages extends Component {
    static propTypes = {
    }

    static defaultProps = {
        maxVisibleCount: 2,
        limit: 5
    }

    componentDidMount() {
        const { loadCommentPages } = this.props
        loadCommentPages()
    }

    render() {
        const { match, total } = this.props
        if (!total) return <Loader />

        return (
            <div>
                <Route path = {`${match.path}/:id`} children = {this.getPagination} />
                <Route path = {`${match.path}/:id`} children = {this.getCommentPage} />
            </div>
        )
    }

    getCommentPage = ({ match }) => {
        if (!match) return <h2>Please select a page</h2>
        const number = match.params.id
        const { limit, total } = this.props
        const maxPage = Math.ceil(total /limit)
        if (number && ((number < 1) || (number > maxPage))) return <h3>Invalid page number</h3>

        return <CommentPage number = {number} limit = {this.props.limit} key = {number} />
    }

    getPagination = ({ match }) => {
        const { maxVisibleCount, limit, total } = this.props
        const maxPage = Math.ceil(total /limit)
        const number = match ? match.params.id : null;

        let start = number != null ?
            ((number >= 1) && (number <= maxPage) ? maxVisibleCount * Math.floor((number - 1) / maxVisibleCount) + 1 : 1) : 1

        const visibleCount = (start  + maxVisibleCount) <= maxPage ?
            maxVisibleCount : maxPage - start + 1

        let pages = [];
        for (let i = 0; i < visibleCount; i++) {
            pages.push(start + i)
        }
        let prevLink = (start > 1) ?
            <NavLink to = {`/comments/${(start - 1)}`}>&lt;</NavLink> : <a>&nbsp;</a>;
        let nextLink = (start + visibleCount <= maxPage) ?
            <NavLink to = {`/comments/${(start + visibleCount)}`}>&gt;</NavLink> : null;

        return (
            <div>
                {prevLink}
                {
                    pages.map(number =>
                        <NavLink key = {number} to = {`/comments/${number}`} activeStyle = {{color: 'red'}}>{number}
                        </NavLink>)
                }
                {nextLink}
            </div>
        )
    }
}

export default connect((state, ownProps) => {
    return {
        total: commentPagesTotalSelector(state)
    }
}, { loadCommentPages })(CommentPages)