import React, { Component } from 'react';
import  Paginator from './Paginator'
import {connect} from 'react-redux'
import {  loadAllCommentsForPaginator} from '../AC'
 import  Comment   from './Comment'
import {  commentsAllSelector, commentsGetTotal } from '../selectors'

 class AllComments extends Component {
  
    componentDidMount() { 
        const { page ,  path ,  loadAllCommentsForPaginator}  = this.props 
        console.log("===="+  page )
        const {limit}  =  0   
        const {offset}  = 0
        this.props.loadAllCommentsForPaginator ( page, 0 , 0  );
    } 



  render() {
      const { page ,  path,  comments, total }  = this.props  
      if (!comments.length) return <h3>loading...</h3>



console.log(comments)
      const body =  comments.map(comment => <li key = {comment.id}><Comment id = {comment.id} /> <br/>  </li>)    


    return (
      <div>
    PAGE = {page} <br/>
    totalcom = {total}
<ul>
{body}
</ul>
      <Paginator path = {path}  page = {page} maxpage = {16}  />
      </div>
    )
  }
}

export default connect(  state=>{
    return{ 
       comments: commentsAllSelector(state), 
       total :  commentsGetTotal(state),
    }
} , { loadAllCommentsForPaginator} )  (AllComments)