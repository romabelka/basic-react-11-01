import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isOpen: false
    }
  }

  render() {
    let commentElements;
    if (this.props.comments) {
      commentElements = this.state.isOpen && this.props.comments.map((comment, index) => <li key={comment.id}>
                            <Comment comment = {comment}/>
                        </li>);
    }
    else {
      commentElements = this.state.isOpen && <Comment />;
    }
    return (
      <div>
        <h3>
          Comments
          <button onClick={this.handleClick}>
              {this.state.isOpen ? 'close' : 'open'}
          </button>
        </h3>
        <ul>
            {commentElements}
        </ul>
      </div>
    )
  }

  handleClick = () => {
      this.setState((state) => ({
          isOpen: !state.isOpen
      }))
  }
}

export default CommentList;
