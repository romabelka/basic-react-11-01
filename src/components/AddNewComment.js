import React, {Component} from 'react' 


class  AddNewComment extends Component {
   
    state = {
        name: '',
        text: ''
    }
  
   render() {

   return(
       <div>
           <h3>Add Comment</h3>
           Author:  <br/>
           <input type="text" value= {this.state.name} />   <br/>
           Comment: <br/>
           <textarea value={this.state.text} id="" cols="40" rows="5"></textarea> <br/>
           <button>Add new comment</button>
       </div>
   ) 
   }
}

export default AddNewComment; 