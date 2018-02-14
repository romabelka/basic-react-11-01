import React, { Component } from 'react';
import PropTypes from 'prop-types'
export default class LanguageBtn extends Component {

static contextTypes = { 
    dict : PropTypes.object
}
   
    
  render() { 
    //   console.log("12", this.context.dict  )
      const { chooseLang,  lang }  = this.props
    return (
      <div>
           {this.context.dict.LANG}
           : {lang}  
         <button  onClick = { chooseLang('ru') } >RU</button>
        <button onClick = { chooseLang('en') } >EN</button>
      </div>
    )
  }
};
