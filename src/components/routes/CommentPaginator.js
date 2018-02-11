import React, { Component } from 'react';
import  AllComments  from '../AllComments'
import {Route} from 'react-router-dom'


export default class CommentPaginator extends Component {
  render() {

console.log(this.props.match)

   
    return (
      <div>
           <h4> ALL COMMENTS </h4>
           <Route path = {`${this.props.match.path}/:page`} render = {this.getCommentsPaginator} />
       
      </div>
    )
  }

  getCommentsPaginator = ({ match }) => {

    console.log( match)

    const page = match.params.page

    if (!match) return <h2>Please select an article</h2>
    return   <AllComments page = {page}  path = {this.props.match.path} />
}


}

