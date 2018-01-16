import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
  state = {
    isOpen: false
  }

  handleClick = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen
    }));
  }

  render() {
    const {comments} = this.props;
    const commentElements = comments ? comments.map((comment)=>{
      return (
        <li key={comment.id}>
          <Comment comment={comment}/>
        </li>
      )
    }) : 'No comments';

    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isOpen ? 'close' : 'open'}
        </button>
        <ul>
          {this.state.isOpen && commentElements}
        </ul>
      </div>
    );
  }
}

export default CommentList
