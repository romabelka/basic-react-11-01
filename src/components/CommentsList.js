import React, {Component} from 'react'
import Comment from './Comment'

class CommentsList extends Component {
  constructor (props) {
    super(props)
  }

  state = {
    isOpen: false
  }

  render () {
    const comments = this.props.comments.map(comment => {
      return <li key={comment.id}><Comment comment = {comment}/></li>
    })
    const commentsList = this.state.isOpen ? comments : ''
    return (
      <div>
        <button onClick={this.showComments}>
          {this.isOpen ? 'Hide comments' : 'Show comments'}
        </button>
        <ul>{commentsList}</ul>
      </div>
    )
  }

  showComments = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen
    }))
  }
}

export default CommentsList
