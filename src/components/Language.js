import React, { Component } from 'react';
import dictionary from './dictionary'
import PropTypes from 'prop-types'
import LanguageBtn from './LanguageBtn'

class Language extends Component {
  
static defaultProps = {
    lang: 'ru'
 }

 state = {
    lang: this.props.lang
}




static childContextTypes = {
    dict: PropTypes.object
 }

getChildContext() {
   return {
        dict : dictionary[this.state.lang]
    }
}

// static contextTypes = {
//     dict: PropTypes.object
// }
static contextTypes = { 
    dict : PropTypes.object
}
   


  render() {
     console.log(dictionary[this.state.lang])
      console.log(this.context)
    return (
      <div>
          <LanguageBtn  chooseLang = { this.chooseLang  }   lang = { this.state.lang } />
       
      </div>
    )
  }


  chooseLang = (langIn) =>  () => {
        this.setState( { 
            lang  : langIn
         } )
  }
}

export default Language
