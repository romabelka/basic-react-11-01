import React, {Component} from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isOpen: props.defaultOpen,
        foo: null
    };
  }

  render(){
    const user = this.props.comment && <p>{this.props.comment.user}</p> || '';
    const commentText = this.props.comment && <p>{this.props.comment.text}</p> || 'There is no comments yet.';
    return(
      <span>
          {user}
          {commentText}
      </span>

    )
  }
}

export default Comment;
