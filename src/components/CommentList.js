import React, { Component } from 'react';
import Comment from './Comment';

const style = {
  padding: 5,
  marginLeft: '-25px',
  borderBottom: '1px solid gray',
}

class CommentList extends Component {
  state = {
    isVisible: false,
  }

  handleClick = () => { this.setState({ isVisible: !this.state.isVisible }) };

  render() {
    const comments = this.state.isVisible && this.props.comments.map(comment => {
      return <li key={comment.id} style={ style }><Comment comment={comment} /></li>
    });
    return (
      <section>
        <div>
          <span>User comments&nbsp;</span>
          <button onClick={this.handleClick}>{this.state.isVisible ? 'Hide' : 'Show' }</button>
        </div>
        <ul>{comments}</ul>
      </section>
    );
  }
}

export default CommentList;