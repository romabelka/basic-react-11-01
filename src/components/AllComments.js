import React, { Component } from 'react';
import  Paginator from './Paginator'
import {connect} from 'react-redux'
import {  loadAllCommentsForPaginator} from '../AC'
 import  Comment   from './Comment'
import {  commentsAllSelector, commentsGetTotal } from '../selectors'

 class AllComments extends Component {
     

    

    componentDidMount() { // 
        const { page ,  path , total,  loadAllCommentsForPaginator}  = this.props 
        console.log("===="+  page )
        const {limit}  =  0   
        const {offset}  = 0
        if( total ==0 ){ 
        this.props.loadAllCommentsForPaginator ( page, 0 , 0  );  }
        // можно менять лимит и оффсет но это будет сново загрузка это плохо 
    } 



  render() {
      const { page ,  path,  comments, total }  = this.props  
     
    
      if (!comments.length) return <h3>load</h3>
      const maxpage = Math.floor(total / 5) + 1;
    //   console.log("==="+maxpage);


    //    console.log(comments)
      const body =  comments.map(comment => <li key = {comment.id}><Comment id = {comment.id} /> <br/>  </li>)    


    return (
      <div>
    PAGE = {page} <br/>
    totalcom = {total}
<ul>
{body}
</ul>  
      <Paginator path = {path}  page = {page} maxpage = {maxpage}  />
      </div>
    )
  }
}

export default connect(  (state, ownProps)=>{
    // console.log(ownProps.page)
    return{ 
       comments: commentsAllSelector( state, ownProps), 
       total :  commentsGetTotal(state),
    }
} , { loadAllCommentsForPaginator} )  (AllComments)