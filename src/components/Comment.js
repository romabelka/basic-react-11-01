import React, {Component} from 'react'

class Comment extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {comment} = this.props
    return (
      <React.Fragment>
        <p>{comment.text}</p>
        Comment by: <strong>{comment.user}</strong>
      </React.Fragment>
    )
  }
}

export default Comment
