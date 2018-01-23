import React, {Component} from 'react' 
import './style.css'

class  AddNewComment extends Component {
   
    state = {
        name: '',
        text: ''
    
    }
  
   render() {
   const classValidName =  ( this.state.name.length < 10 && this.state.name.length != 0  )  || this.state.name.length > 50 ?  "no-valid" : "valid"
   const classValidText =  ( this.state.text.length < 10 && this.state.text.length != 0  )  || this.state.text.length > 50 ?  "no-valid" : "valid"
   return(
       <div>
           <h3>Add Comment</h3>
           Author:  <br/>
           <input type="text" className = {classValidName} value= {this.state.name} onChange={this.handleChange} />   <br/>
           Comment: <br/>
           <textarea value={this.state.text} className={classValidText} onChange={this.handleChangeText} id="" cols="40" rows="5"></textarea> <br/>
           <button>Add new comment</button>
       </div>
   ) 
   } 
    

   handleChangeText = ev => {
    const text = ev.target.value
    

    this.setState({ text })
}

   handleChange = ev => {
    const name = ev.target.value
    

    this.setState({ name })
}

}

export default AddNewComment; 