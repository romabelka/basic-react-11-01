import React, {Component} from 'react';
import CommentsList from './CommentsList';

class CommentsBlock  extends Component {

    state = {
        isOpenCommets: false
    } 

    render(){
        const {comments} = this.props;

        const bodyCommentsBlock  =  this.state.isOpenCommets && <CommentsList comments = {comments} />;
        return(
            <div>  
               <h3>All comments</h3>  
               <button onClick={this.handleClick}>
                        {this.state.isOpenCommets ? 'close' : 'open'}
              </button>
                {console.log(comments)}
               {bodyCommentsBlock}
            </div>
        )
    }
    handleClick = () =>{
        this.setState({ 
            isOpenCommets: !this.state.isOpenCommets
        }) 
    }
}

export default CommentsBlock;
