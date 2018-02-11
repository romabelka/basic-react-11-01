import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom'


export default class Paginator extends Component {
  render() {
   
    const {path , page , maxpage}  = this.props 
    console.log({path})  

    const paginatorMas  = [] ;
     for (let index = 1; index <= maxpage; index++) {
       paginatorMas.push(  { "to": path +'/'+index , "text": index }  )
     }


   const body   = paginatorMas.map((linkPaginator, index) => 
      <li key={index}>    <NavLink to = {linkPaginator.to}  >  {linkPaginator.text.toString()}  </NavLink>  </li> 
       )
    

    return (
      <div>
          <ul>
          {body} 
          </ul>    
      </div>
    )
  }
};
