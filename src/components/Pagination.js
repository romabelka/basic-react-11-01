import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Route, Switch, NavLink } from 'react-router-dom'
import {loadAllComments} from '../AC'
import {contentSelector} from '../selectors'

class Pagination extends Component {
    static propTypes = {

    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps--', nextProps)
        if (this.props.currentPage === nextProps.currentPage) return
        const limit = nextProps.perPage
        const currentPage = nextProps.currentPage
        const offset = ((currentPage-1)) * limit
        if (!nextProps.contentLoading && !nextProps.contentLoaded) {
            this.props.loadAllComments(currentPage || 1, {limit, offset})
        }
    }

    render() {
        const {pages} = this.props
        const body = new Array(pages).fill(0).map((_, i) => i+1).map(page => <li key = {page}>
            <NavLink to = {`/comments/${page}`} activeStyle = {{ color: 'red' }}>{page}</NavLink>
        </li>)
        return (
            <div>
                <h1>Pagination</h1>
                <ul>
                    {body}
                </ul>
            </div>
        )
    }

}

export default connect(null, {loadAllComments})(Pagination)