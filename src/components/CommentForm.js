import React, { Component } from 'react'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <div>
                <div>
                  Username: <input type = "text" value = {this.state.user} onChange = {this.handleChange.bind(this, 'user')}/>
                </div>
                <div>
                  Comment: <input type = "text" value = {this.state.text} onChange = {this.handleChange.bind(this, 'text')}/>
                </div>
                <button onClick={this.addComment.bind(this)}>Ok</button>
                <button onClick={this.cancel.bind(this)}>Cancel</button>
            </div>
        )
    }

    handleChange = (field, ev) => {
        const value = ev.target.value
        if (value.length > 10) return


        this.setState({[field] : value})
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