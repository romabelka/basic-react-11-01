import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './Comment/add'
import toggleOpen from '../decorators/toggleOpen'

function CommentList(props) {
    const {isOpen, toggleOpen} = props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody(props)}
        </div>
    )
}

function getFormFields() {
    return {
        user: {
            tagName: 'input',
            attrs: {
                type: 'text',
                className: 'form-control',
                placeholder: 'Your name'
            },
            validate: (value) => {
                return value.length >= 10 &&
                       value.length <= 50
            }
        },
        text: {
            tagName: 'textarea',
            attrs: {
                placeholder: 'Your comment',
                className: 'form-control'
            },
            validate: (value) => {
                return value.length >= 10 &&
                       value.length <= 50
            }
        }
    }
}

function getBody(props) {
    const {comments, isOpen} = props
    if (!isOpen) return null

    const body = comments.length ? (
        <ul>
            {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
        </ul>
    ) : <h3>No comments yet</h3>

    return (
        <div>
            {body}
            <h4>Добавить комментарий:</h4>
            <CommentForm fields = {getFormFields()} />
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

CommentList.defaultProps = {
    comments: []
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