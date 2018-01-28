import {SELECT_ARTICLE_FILTER}  from '../constants'

const defSelect = null

export default ( selectedState = defSelect,   action  )=> {
     const { type, payload }   = action
    
     switch (type ){
         case SELECT_ARTICLE_FILTER : return payload.selected
     }
    return selectedState
}