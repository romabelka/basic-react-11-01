import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const {isOpen, toggleOpen, idarticle } = this.props
        const text = isOpen ? 'hide comments' : 'show comments' 
     
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody(idarticle)}
            </div>
        )
    }

    getBody(idarticle) {
        const {comments, isOpen} = this.props
        if (!isOpen) return null

        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment  id = {id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

       

        // console.log("idarticle------------" +  idarticle)  
        return ( 
          
             <div>
                {body}
                <CommentForm  idarticle = { idarticle} />
            </div>
        )
    }
}


export default toggleOpen(CommentList)