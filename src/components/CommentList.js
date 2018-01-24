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

    state={
        user: '',
        text: ''
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
                <Input label = 'Your name' value = {this.state.user} />
                <Input label = 'Your text' fieldType= 'textarea' value = {this.state.text} />
                {body}
            </div>
        )
    }
}

export default toggleOpen(CommentList)