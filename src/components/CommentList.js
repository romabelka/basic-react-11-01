import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

import { connect  } from 'react-redux'
import { loadCommentForArticle } from  '../AC'
import {commentsSelector, commentsLoadingSelector} from '../selectors'

import Loader from './common/Loader' 
class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }
    
    

    componentWillReceiveProps({ isOpen, article, loadCommentForArticle }){
          
          if( !this.props.isOpen && isOpen  ) loadCommentForArticle( article.id ) 
          
     

    }

    render() {
        const {isOpen, toggleOpen , comments  } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { comments ,  article, isOpen, loading} = this.props

           console.log(comments)


        if (!isOpen) return null
        if (loading) return <Loader />
        const body = comments.length ? (
            <ul>
                {comments.map(comment => <li key = {comment['id']}><Comment id = {comment['id']}  /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {article.get('id')} />
            </div>
        )
    }
}


export default connect( state => { 
    return {
        comments : commentsSelector(state), 
        loading: commentsLoadingSelector(state)
    }
}, { loadCommentForArticle } ) (toggleOpen(CommentList))