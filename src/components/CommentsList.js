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
    const pluralization = `comment${this.props.comments.length > 1 ? 's' : ''}`

    const comments = this.props.comments.map(comment => {
      return <Comment key={comment.id} comment = {comment}/>
    })

    const commentsList = this.state.isOpen ? comments : ''

    return (
      <div>
        <button onClick={this.showComments}>
          {this.isOpen ? `Hide ${pluralization}` : `Show ${pluralization}`}
        </button>
        <ul>{commentsList}</ul>
      </div>
    )
  }

  /**
   * Comment visibility switcher
   */
  showComments = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen
    }))
  }
}

export default CommentsList
