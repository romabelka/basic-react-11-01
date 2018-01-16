import React, {Component} from 'react'

class Comment extends Component {
  render() {
    const {comment} = this.props;
    return (
      <div>
        <h4>{comment.user}</h4>
        <div>{comment.text}</div>
      </div>
    );
  }
}

export default Comment
