import React, { Component } from 'react'
import {connect} from 'react-redux'
import Comment from '../Comment'
import Pagination from '../Pagination'
import Loader from '../common/Loader'
import {Route} from 'react-router-dom'
import {loadAllComments} from '../../AC'
import {contentSelector} from '../../selectors'

class CommentListPage extends Component {
    static propTypes = {

    }

    state = {
        perPage: 5
    }

    componentDidMount() {
        console.log(this.props)
        const limit = this.state.perPage
        const currentPage = this.props.match.params.page
        const offset = (currentPage-1) * limit
        this.props.loadAllComments(currentPage || 1, {limit, offset})
    }

    render() {
        const { total, comments} = this.props
        const {perPage} = this.state

        const body = comments.contentLoaded && comments.records.length ? (
            <ul>
                {comments.records.map(id => <li key = {id}><Comment id = {id} /></li>)}
            </ul>
        ) : comments.contentLoading && !comments.contentLoaded ? <Loader/> : <h3>No comments yet</h3>
        return (
            <div>
                <h2>Comment list</h2>
                {body}
                <Pagination 
                    currentPage = {this.props.match.params.page}
                    pages = {Math.ceil(total/perPage)}
                    perPage = {this.state.perPage}
                    contentLoading = {comments.contentLoading}
                    contentLoaded = {comments.contentLoaded}/>
            </div>
        )
    }
}

export default connect((state, props) => ({
    comments: contentSelector(state, props),
    total: state.pages.total
}), {loadAllComments} )(CommentListPage)