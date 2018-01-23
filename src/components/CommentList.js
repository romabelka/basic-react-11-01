import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import Input from './Input'
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

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody(this.props)}
            </div>
        )
    }

    getBody(props) {
        const {comments, isOpen} = props
        if (!isOpen) return null
    
        const body = comments.length ? (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>
    
        return (
            <div>
                <Input label = 'Your name' />
                <Input label = 'Your text' fieldType= 'textarea' />
                {body}
            </div>
        )
    }
}

export default toggleOpen(CommentList)