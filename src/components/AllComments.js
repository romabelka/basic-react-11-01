import React, { Component } from 'react';
import  Paginator from './Paginator'
export default class AllComments extends Component {
  render() {
      const { page ,  path }  = this.props  
   
     
 
    return (
      <div>
    PAGE = {page}

      <Paginator path = {path}  page = {page} maxpage = {16}  />
      </div>
    )
  }
};
