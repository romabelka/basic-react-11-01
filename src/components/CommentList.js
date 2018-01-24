import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    constructor(props) {
        super(props)

        this.state = {
            isAdd: false
        }
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        const disabled = this.state.isAdd
        const contentAdd =  this.state.isAdd ? <CommentForm hideCommentForm={this.hideCommentForm.bind(this)} /> : null;
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                <button onClick={this.addComment.bind(this)} disabled={disabled}>add comment</button>
                {contentAdd}
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null
    
        const body = comments.length ? (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>
    
        return (
            <div>
                {body}
            </div>
        )
    }

    addComment() {
        this.setState({
            isAdd: true
        })
    }

    hideCommentForm() {
        this.setState({
            isAdd: false
        })
    }

}

/*
class CommentList extends Component {
    static defaultProps = {
        comments: []
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

    getBody() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null

        const body = comments.length ? (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
            </div>
        )
    }

}
*/


export default toggleOpen(CommentList)