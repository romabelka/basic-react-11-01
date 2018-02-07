import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

import { connect  } from 'react-redux'
import { loadCommentForArticle , loadCommentToCashe } from  '../AC' 
import {commentsSelector, commentsLoadingSelector, commentsSelectorCashe} from '../selectors'

import Loader from './common/Loader' 
class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }
    
    

    componentWillReceiveProps({ isOpen, article, loadCommentForArticle }){
          
          if( !this.props.isOpen && isOpen && !article.get('commentInCashe')  )    loadCommentForArticle( article.id ) 
          

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
        const { comments ,  article, isOpen, loading ,  loadCommentToCashe } = this.props
        console.log(comments)

        if( !article.get('commentInCashe') ) {
            console.log(  "before" + article.get('commentInCashe'))
            loadCommentToCashe(comments,  article.get('id'))
            console.log(  "after" + article.get('commentInCashe'))
            // сейчас коменты в кеше 
             console.log(article.comments)
        }   
       

      


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


export default connect( (state, ownProps  ) => { 
    const { article }  = ownProps
    console.log(article.get('commentInCashe'))
     if (!  article.get('commentInCashe') ) {
        return {
            comments : commentsSelector(state), 
            loading: commentsLoadingSelector(state)
        }
     } 

     return {
        comments : commentsSelectorCashe(state, ownProps ), 
        loading: commentsLoadingSelector(state)
    }
  
}, { loadCommentForArticle, loadCommentToCashe } ) (toggleOpen(CommentList))