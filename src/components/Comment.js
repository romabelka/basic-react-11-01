import React from 'react';

function Comment(props) {
  const comment = props.comment;
  return (
    <article>
      <div>{comment.text}</div>
      <div><i>by {comment.user}</i></div>
    </article>
  );
}

export default Comment;