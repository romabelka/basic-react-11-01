import React, { Component } from 'react'; 

class Comment extends Component{
   render(){
    const { comment } = this.props;
    return(
        <div>
       <b>{comment.user}</b>  
       <p> {comment.text} </p>   
       
       </div>
    )

   }
}

export default Comment;