import React, { Component } from 'react'
import './style.css'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        text: '',
        userValidSelector: 'invalid',
        textValidSelector: 'invalid'
    }

    render() {
        return (
            <div className="comment-form">
                <div>
                  Username: <input type = "text" className = {this.state.userValidSelector} value = {this.state.user} onChange = {this.handleChange.bind(this, 'user')}/>
                </div>
                <div>
                  Comment: <input type = "text" className = {this.state.textValidSelector} value = {this.state.text} onChange = {this.handleChange.bind(this, 'text')}/>
                </div>
                <button onClick={this.addComment.bind(this)}>Ok</button>
                <button onClick={this.cancel.bind(this)}>Cancel</button>
            </div>
        )
    }

    handleChange = (field, ev) => {
        const value = ev.target.value

        this.setState({
            [field] : value,
            [field + 'ValidSelector']: (value.length >= 10 && value.length <= 50) ? '' : 'invalid'
        })
    }

    addComment() {
      // todo add comment

      this.props.hideCommentForm();
    }

    cancel() {
      this.props.hideCommentForm();
    }
}

export default CommentForm